"use client"

import { useState } from "react"
import Hero from "./components/Hero"
import Features from "./components/Features"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import PopupForm from "./components/PopupForm"
import ThankYouPopup from "./components/ThankYouPopup"

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [isThankYouOpen, setIsThankYouOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  const handleSubmitSuccess = () => {
    setIsPopupOpen(false)
    setIsThankYouOpen(true)
  }

  const closeThankYou = () => setIsThankYouOpen(false)

  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Hero />
        <Features />
        <CallToAction onCtaClick={openPopup} />
      </main>
      <Footer />
      {isPopupOpen && <PopupForm onClose={closePopup} onSubmitSuccess={handleSubmitSuccess} />}
      {isThankYouOpen && <ThankYouPopup onClose={closeThankYou} />}
    </div>
  )
}

