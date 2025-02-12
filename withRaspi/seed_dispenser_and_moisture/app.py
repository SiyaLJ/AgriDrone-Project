from flask import Flask, render_template, send_file
import threading
import firebase_admin
from firebase_admin import credentials, initialize_app, firestore
import pigpio
import time
import datetime
import io
import RPi.GPIO as GPIO
import os
from dotenv import load_dotenv  # Add this import
import json  # Add this import
print("Current Working Directory:", os.getcwd())

# Load environment variables
load_dotenv()

# Set up Firebase with environment variables
cred_dict = {
    "type": os.getenv("FIREBASE_TYPE"),
    "project_id": os.getenv("FIREBASE_PROJECT_ID"),
    "private_key_id": os.getenv("FIREBASE_PRIVATE_KEY_ID"),
    "private_key": os.getenv("FIREBASE_PRIVATE_KEY").replace('\\n', '\n'),
    "client_email": os.getenv("FIREBASE_CLIENT_EMAIL"),
    "client_id": os.getenv("FIREBASE_CLIENT_ID"),
    "auth_uri": os.getenv("FIREBASE_AUTH_URI"),
    "token_uri": os.getenv("FIREBASE_TOKEN_URI"),
    "auth_provider_x509_cert_url": os.getenv("FIREBASE_AUTH_PROVIDER_CERT_URL"),
    "client_x509_cert_url": os.getenv("FIREBASE_CLIENT_CERT_URL")
}

# Initialize Firebase with dictionary credentials
cred = credentials.Certificate(cred_dict)
initialize_app(cred)
db = firestore.client()

app = Flask(__name__)
app = Flask(__name__, template_folder='templates')


# Set up pigpio
pi = pigpio.pi('localhost')  


# Set up servo motor on GPIO pin 8 using pigpio
servo_pin = 8
servo = pi.set_servo_pulsewidth(servo_pin, 2000)  # Set initial position

# Set up GPIO for water sensor on pin 10
water_sensor_pin = 10
GPIO.setmode(GPIO.BCM)
GPIO.setup(water_sensor_pin, GPIO.IN)

# Variable to keep track of the last recorded time
last_recorded_time = 0

def move_servo():
    pi.set_servo_pulsewidth(servo_pin, 2000)  # Move to 180 degrees (2000 pulsewidth)
    time.sleep(1)
    pi.set_servo_pulsewidth(servo_pin, 1000)  # Move to 0 degrees (1000 pulsewidth)
    time.sleep(1)
    pi.set_servo_pulsewidth(servo_pin, 2000)  # Move back to initial position (1500 pulsewidth)

def callback(channel):
    global last_recorded_time
    current_time = time.time()

    # Check if 5 seconds have passed since the last recording
    if current_time - last_recorded_time >= 5:
        if GPIO.input(channel):
            water_detected = "No Water Detected!"
        else:
            water_detected = "Water Detected!"
        
        # Set the time zone offset to your local time zone
        local_offset = 0  # Replace with the offset in hours, for example, 2 for GMT+2

        # Get current time in UTC
        current_time_utc = datetime.datetime.utcnow()

        # Convert UTC time to local time
        current_time_local = current_time_utc + datetime.timedelta(hours=local_offset)

        # Data to update in the document
        data = {
            'date': current_time_local,
            'water_detected': water_detected
        }
        
        # Update the Firestore document
        try:
         doc_ref = db.collection("seed_moisture").document("value")
         doc_ref.set(data)  # Set instead of update if the document ID doesn't exist yet
         print(f"Document updated successfully. Water Detected: {water_detected}")
        except Exception as e:
            print(f"Error updating document: {e}")

        # Update the last recorded time
        last_recorded_time = current_time


@app.route("/index.html")
def index():
    return render_template("index.html")

@app.route("/move")
def move():
    t = threading.Thread(target=move_servo, daemon=True)
    t.start()
    return "Moving the servo to 180 degrees for 1 second and then back to 0 degrees."

@app.route("/detection.html")
def detection():
    return render_template("detection.html")

@app.route("/home.html")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    try:
        GPIO.add_event_detect(water_sensor_pin, GPIO.BOTH, bouncetime=300)
        GPIO.add_event_callback(water_sensor_pin, callback)
        app.run(debug=True, 
        host="0.0.0.0", 
        port=443, 
        ssl_context=('seed_dispenser/ssl/cert.pem', 
                    'seed_dispenser/ssl/key.pem'))
    except KeyboardInterrupt:
        GPIO.cleanup()
        pi.set_servo_pulsewidth(servo_pin, 0)  # Turn off the servo motor
        pi.stop()  # Release pigpio resources