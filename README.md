# **AgriDrone: IoT-Based Crop Monitoring System** 🚁🌾

---

## **Overview**
AgriDrone is an **IoT-based drone system** designed to help farmers monitor their crops efficiently. The drone collects real-time data using various sensors, including a **soil moisture detector**, **camera**, and **temperature + humidity sensor**. This data is processed and analyzed to provide actionable insights, helping farmers make informed decisions throughout the year.

---

## **🎥 Project Demo**
See AgriDrone in action:

[![AgriDrone Demo](https://img.youtube.com/vi/cD31NXpJvIc/0.jpg)](https://youtu.be/cD31NXpJvIc)

## **Key Features**
- **Real-Time Crop Monitoring**: Collects data on soil moisture, temperature, humidity, and visual crop health.
- **Data Analytics**: Provides insights and trends to optimize farming practices.
- **User-Friendly Dashboard**: Visualizes data for easy interpretation.
- **Cost-Effective**: Built using affordable hardware like Raspberry Pi and IoT sensors.

---

## **Hardware Components**
- **Raspberry Pi**: Acts as the central processing unit.
- **Sensors**:
  - Soil Moisture Sensor
  - Temperature and Humidity Sensor (e.g., DHT22)
  - Camera Module
- **Drone Frame**: Custom-built or off-the-shelf drone frame.
- **GPS Module**: For precise location tracking.
- **Power Supply**: Battery pack for the drone and sensors.

---

## **💻 Software Architecture**
### Backend Stack
- **Core**: Python
- **Data Processing**: Pandas, NumPy
- **Visualization**: Matplotlib, Plotly
- **Database**: Firebase
- **Communication**: MQTT/HTTP Protocols

### Future Integration
- Web Dashboard (Flask/Django)
- Enhanced Analytics Platform
- Mobile App Support

---

## **How It Works**
1. **Data Collection**:
   - The drone flies over the farm, collecting data from the sensors.
   - The Raspberry Pi processes the data and sends it to the server.
2. **Data Storage**:
   - Sensor data is stored in a database for historical analysis.
3. **Data Analytics**:
   - The system analyzes the data to provide insights such as:
     - Optimal irrigation schedules.
     - Crop health trends.
     - Weather impact on crops.
4. **Farmer Dashboard**:
   - Farmers can access a web-based dashboard to view real-time data and analytics.

---

## **Installation and Setup**
### Prerequisites
- Raspberry Pi (with Raspbian OS)
- Python 3.x
- IoT sensors (soil moisture, temperature, humidity, camera)
- Drone components (frame, motors, GPS, etc.)

# SSL Certificates
SSL certificates are required but not included in the repository for security.
1. Generate new certificates using: openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
2. Place them in seed_dispenser/ssl/
3. Never commit certificates to the repository

### Steps to Set Up
1. Clone the repository:
   ```bash
   git clone https://github.com/SiyaLJ/agridrone.git
   Then, run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
        ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
