import { Button } from "@/components/ui/button"

interface CallToActionProps {
  onCtaClick: () => void
}

export default function CallToAction({ onCtaClick }: CallToActionProps) {
  return (
    <div className="bg-green-700 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4">Ready to revolutionize your farming?</h2>
        <p className="text-xl text-green-100 mb-8">
          Get in touch with us to learn how AgriDrone can boost your crop yield and efficiency.
        </p>
        <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100" onClick={onCtaClick}>
          Contact Us
        </Button>
      </div>
    </div>
  )
}

