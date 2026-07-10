import React from 'react'
import { Check, Phone, Mail } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

import ins1 from '../../assets/ins1.webp'
import ins2 from '../../assets/ins2.webp'
import ins3 from '../../assets/ins3.webp'
import ins4 from '../../assets/ins4.webp'
import ins5 from '../../assets/ins5.webp'

function Footer() {
  return (
    <footer className="bg-light py-12 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <h2 className="col-span-full text-3xl font-extrabold mb-4 font-urbanist text-[var(--footer-color)]">
            Quick Links:
          </h2>

          {/* Columna 1 */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Branding
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Recent Work
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Our history
            </p>
          </div>

          {/* Columna 2 */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Product Gallery
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Web & Interactive
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Help & support
            </p>
          </div>

          {/* Columna 3 */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              About us
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Branded Merchandise
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--pg-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white">
                <Check size={12} />
              </span>
              Our Awards
            </p>
          </div>

          {/* Columna 4 - Contacto y Redes */}
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <Phone size={18} className="text-[var(--social-color)]" />
              666 888 0000
            </p>
            <p className="flex items-center gap-2 text-lg font-extrabold font-urbanist text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors cursor-pointer">
              <Mail size={18} className="text-[var(--social-color)]" />
              needhelp@gmail.com
            </p>

            {/* Iconos de redes sociales */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-[var(--pg-color)] hover:text-[var(--social-color)] transition-all duration-500 hover:scale-110">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="text-[var(--pg-color)] hover:text-[var(--social-color)] transition-all duration-500 hover:scale-110">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-[var(--pg-color)] hover:text-[var(--social-color)] transition-all duration-500 hover:scale-110">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Galería de imágenes */}
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="img-wrapper">
              <img src={ins1} alt="Instagram 1" />
            </div>
            <div className="img-wrapper">
              <img src={ins2} alt="Instagram 2" />
            </div>
            <div className="img-wrapper">
              <img src={ins3} alt="Instagram 3" />
            </div>
            <div className="img-wrapper">
              <img src={ins4} alt="Instagram 4" />
            </div>
            <div className="img-wrapper">
              <img src={ins5} alt="Instagram 5" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 py-6 border-t border-gray-300">
          <small className="text-lg font-extrabold font-urbanist text-[var(--footer-color)]">
            Frost Quest. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  )
}

export default Footer