import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RealTimeCropMonitoring() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Real-time Crop Monitoring</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Crop Monitoring</h2>
          <p className="mb-4">
            Real-time crop monitoring allows farmers to keep a constant eye on their fields, providing up-to-the-minute
            data on crop health, growth patterns, and potential issues. This technology enables early detection of
            problems such as pest infestations, nutrient deficiencies, or water stress, allowing for timely
            interventions.
          </p>
          <Button className="mb-4">Start Real-time Monitoring</Button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Servo Motor Control</h2>
          <p className="mb-4">
            A servo motor is a type of rotary or linear actuator that allows for precise control of angular or linear
            position, velocity, and acceleration. It is a closed-loop system that uses feedback to maintain the desired
            output, making it highly accurate and responsive.
          </p>
          <p className="mb-4">
            Servo motors find applications in a wide range of fields, including robotics, automation, aerospace, and
            manufacturing, where precise control of position and motion is crucial. They are widely used in mechanisms
            where quick and accurate responses to changing conditions are required.
          </p>
          <Button>Activate Servo Motor</Button>
        </div>
      </div>
      <Link href="/features">
        <Button variant="outline">Back to Features</Button>
      </Link>
    </div>
  )
}

