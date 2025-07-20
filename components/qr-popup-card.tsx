"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

interface QRPopupCardProps {
  isOpen: boolean
  onClose: () => void
}

export function QRPopupCard({ isOpen, onClose }: QRPopupCardProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={onClose}
          style={{ zIndex: 9999 }}
        >
          <motion.div
            className="relative bg-white rounded-3xl shadow-2xl p-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the card
          >
            <motion.button
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg"
              onClick={onClose}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6 text-gray-600" />
            </motion.button>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 px-5 ">Join our WhatsApp Community</h3>
              <div className="flex justify-center">
                <Image src="/images/whatsapp-qr.png" alt="WhatsApp QR code" width={300} height={250} />
              </div>
              <p className="text-gray-600 mt-4">Scan this code with your phone to join the group!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
