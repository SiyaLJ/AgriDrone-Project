import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function SoilMoistureDetection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Soil Moisture Detection</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Soil Moisture?</h2>
        <p className="mb-4">
          Soil moisture refers to the water content present in the soil. It's a crucial factor in agriculture as it
          directly affects plant growth, nutrient availability, and overall crop health. Proper soil moisture levels
          ensure that plants can absorb water and nutrients efficiently, leading to better yields and crop quality.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Why is Soil Moisture Important?</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Optimal plant growth and development</li>
          <li>Efficient nutrient uptake by plants</li>
          <li>Prevention of water stress and drought conditions</li>
          <li>Reduction of water waste through precise irrigation</li>
          <li>Early detection of potential crop issues</li>
          <li>Improved crop yield and quality</li>
        </ul>
        <p className="mb-4">
          By monitoring soil moisture levels, farmers can make informed decisions about irrigation, reducing water waste
          while ensuring their crops receive the optimal amount of water for growth.
        </p>
        <Button className="mb-4">Start Soil Moisture Detection</Button>
      </div>
      <Link href="/features">
        <Button variant="outline">Back to Features</Button>
      </Link>
    </div>
  )
}

