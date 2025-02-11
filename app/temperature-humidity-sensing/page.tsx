import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TemperatureHumiditySensing() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Temperature & Humidity Sensing</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What are Temperature and Humidity?</h2>
        <p className="mb-4">
          Temperature refers to the degree of heat present in the air or a substance. In agriculture, it plays a crucial
          role in plant growth, development, and overall crop health.
        </p>
        <p className="mb-4">
          Humidity is the amount of water vapor present in the air. It affects plant transpiration, water uptake, and
          susceptibility to certain diseases.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why are Temperature and Humidity Important?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Influence plant growth rates and development stages</li>
          <li>Affect photosynthesis and respiration processes</li>
          <li>Impact water uptake and nutrient absorption</li>
          <li>Determine susceptibility to pests and diseases</li>
          <li>Affect pollination and fruit set</li>
          <li>Influence crop quality and yield</li>
        </ul>
        <p className="mb-4">
          Monitoring temperature and humidity allows farmers to create optimal growing conditions for their crops,
          predict and prevent potential issues, and make informed decisions about irrigation, pest control, and harvest
          timing.
        </p>
        <Button className="mb-4">Start Temperature & Humidity Sensing</Button>
      </div>
      <Link href="/features">
        <Button variant="outline">Back to Features</Button>
      </Link>
    </div>
  )
}

