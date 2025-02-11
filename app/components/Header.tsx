import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl text-primary">
              AgriDrone
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/features" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Features
            </Link>
          </nav>
          <div className="flex items-center">
            <Link href="/features">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

