import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Revolutionize Your Farming with AgriDrone
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-white mb-10">
            Harness the power of IoT and drones for smarter, more efficient crop management
          </p>
          <Link href="/features">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg"
            alt="AgriDrone in action"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  )
}

