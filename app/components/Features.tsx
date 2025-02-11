import { Droplet, Thermometer, Eye, BarChart } from "lucide-react"

const features = [
  {
    name: "Real-Time Crop Monitoring",
    description: "Collect data on soil moisture, temperature, humidity, and visual crop health.",
    icon: Eye,
  },
  {
    name: "Data Analytics",
    description: "Gain actionable insights and trends to optimize your farming practices.",
    icon: BarChart,
  },
  {
    name: "Soil Moisture Detection",
    description: "Accurately measure soil moisture levels to optimize irrigation.",
    icon: Droplet,
  },
  {
    name: "Temperature & Humidity Sensing",
    description: "Monitor environmental conditions to protect your crops.",
    icon: Thermometer,
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Powerful Features for Smart Farming</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-md mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
              <p className="text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

