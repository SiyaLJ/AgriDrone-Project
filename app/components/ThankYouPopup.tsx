import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ThankYouPopupProps {
  onClose: () => void
}

export default function ThankYouPopup({ onClose }: ThankYouPopupProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4 text-green-600">Thank You!</h2>
        <p className="mb-6">
          We've received your message and will get back to you as soon as possible. Thank you for your interest in
          AgriDrone!
        </p>
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </div>
    </div>
  )
}

