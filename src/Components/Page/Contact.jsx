import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from 'react-icons/fa';

// Componente reutilizable (ajusta la ruta según tu estructura)
import SectionBanner from '../SectionBanner';

function Contact() {
  return (
    <>
      {/* 1. Banner Reutilizable */}
      <SectionBanner title="Contact" currentPage="Contact" />

      {/* 2. Sección de Contacto */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Título */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--pg-color)] leading-tight">
              Get in touch with our <br className="hidden md:block" /> lovely Team
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* ================= COLUMNA IZQUIERDA: Información de Contacto ================= */}
            <div className="bg-[url('assets/contact-bg.webp')] bg-cover bg-center rounded-2xl p-8 md:p-10 flex flex-col justify-center gap-8 shadow-lg relative overflow-hidden">
              {/* Overlay sutil para mejorar legibilidad si la imagen es muy clara */}
              <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-8">
                {/* Dirección */}
                <div className="flex items-start gap-5">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold text-white mb-1">Office Address</h5>
                    <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                      Travel Agency Network 20<br />
                      Eastbourne Terrace, London W2 6LG
                    </p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start gap-5">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold text-white mb-1">Phone Number</h5>
                    <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                      (408) 8542–389-5470<br />
                      (408) 8542–389-5470
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h5 className="text-xl md:text-2xl font-bold text-white mb-1">Mail Address</h5>
                    <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed">
                      info@envato.com<br />
                      support@envato.com
                    </p>
                  </div>
                </div>

                {/* Iconos de Redes Sociales */}
                <div className="flex flex-wrap gap-4 mt-4 pt-6 border-t border-white/20">
                  <a href="#" className="flex-1 min-w-[80px] h-[80px] rounded-full border-[1.5px] border-[var(--icon-sec-color)] text-[var(--icon-sec-color)] flex items-center justify-center text-xl hover:bg-[var(--icon-sec-color)] hover:text-white transition-all duration-300">
                    <FaFacebookF />
                  </a>
                  <a href="#" className="flex-1 min-w-[80px] h-[80px] rounded-full border-[1.5px] border-[var(--icon-sec-color)] text-[var(--icon-sec-color)] flex items-center justify-center text-xl hover:bg-[var(--icon-sec-color)] hover:text-white transition-all duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="flex-1 min-w-[80px] h-[80px] rounded-full border-[1.5px] border-[var(--icon-sec-color)] text-[var(--icon-sec-color)] flex items-center justify-center text-xl hover:bg-[var(--icon-sec-color)] hover:text-white transition-all duration-300">
                    <FaPinterestP />
                  </a>
                  <a href="#" className="flex-1 min-w-[80px] h-[80px] rounded-full border-[1.5px] border-[var(--icon-sec-color)] text-[var(--icon-sec-color)] flex items-center justify-center text-xl hover:bg-[var(--icon-sec-color)] hover:text-white transition-all duration-300">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* ================= COLUMNA DERECHA: Formulario de Contacto ================= */}
            <div className="bg-[var(--top-color)] border border-[var(--border-color)] rounded-2xl p-8 md:p-10 shadow-sm">
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    className="w-full h-[58px] px-8 rounded-full bg-white border border-[var(--border-color)] outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-400"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="w-full h-[58px] px-8 rounded-full bg-white border border-[var(--border-color)] outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-400"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full h-[58px] px-8 rounded-full bg-white border border-[var(--border-color)] outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-400"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full h-[58px] px-8 rounded-full bg-white border border-[var(--border-color)] outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-400"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    className="w-full h-[200px] p-6 rounded-2xl bg-white border border-[var(--border-color)] outline-none focus:border-[var(--primary-color)] focus:ring-2 focus:ring-[var(--primary-color)]/20 transition-all placeholder:text-gray-400 resize-none"
                    placeholder="Type your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full h-[58px] rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                >
                  Send Message Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Mapa de Google */}
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.6502406952973!2d-79.64504812382636!3d43.59300107110498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b47149e001f97%3A0xf50b13c4cabe7fbc!2sSquare%20One%20Shopping%20Centre!5e0!3m2!1sen!2sca!4v1749006558447!5m2!1sen!2sca"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;