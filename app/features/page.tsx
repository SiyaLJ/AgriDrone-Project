import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DrillIcon as Drone, Camera, Droplet, Thermometer, Wifi, Battery, Cpu, Map } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Real-time Crop Monitoring",
    description: "Advanced imaging for detailed crop analysis and monitoring.",
    link: "/real-time-crop-monitoring",
  },
  {
    icon: Droplet,
    title: "Soil Moisture Detection",
    description: "Advanced sensors to measure soil moisture levels, optimizing irrigation strategies.",
    link: "/soil-moisture-detection",
  },
  {
    icon: Thermometer,
    title: "Temperature & Humidity Sensing",
    description: "Real-time monitoring of environmental conditions to protect crops and enhance growth.",
    link: "/temperature-humidity-sensing",
  },
  {
    icon: Drone,
    title: "Advanced Drone Technology",
    description: "Utilizing cutting-edge drone technology for precise and efficient aerial farm management.",
  },
  {
    icon: Wifi,
    title: "Real-Time Data Transmission",
    description: "Instant data transfer to your devices for immediate analysis and decision-making.",
  },
  {
    icon: Battery,
    title: "Long-lasting Battery Life",
    description: "Extended flight time for comprehensive coverage of large agricultural areas.",
  },
  {
    icon: Cpu,
    title: "Intelligent Data Processing",
    description: "On-board processing capabilities for quick, actionable insights.",
  },
  {
    icon: Map,
    title: "Precision Mapping",
    description: "Create detailed maps of your farmland for better resource management and planning.",
  },
]

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">AgriDrone Features</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <feature.icon className="w-12 h-12 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              {feature.link && (
                <Link href={feature.link}>
                  <Button variant="outline">Learn More</Button>
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/">
            <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

