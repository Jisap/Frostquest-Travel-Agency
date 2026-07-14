import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { List, Grid3x3, MapPin, Clock, Eye } from 'lucide-react';
import 'swiper/css';

// Imágenes
import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';

// Data
import Datas from './../../Destination.json';
import SectionBanner from '../SectionBanner';

// Opcional: Si creaste el componente SectionBanner, impórtalo aquí:
// import SectionBanner from '../components/SectionBanner';

function Tours() {
  return (
    <>
      <SectionBanner title="Tour" currentPage="Tour" />

      {/* ============ TOURS WRAPPER ============ */}
      <div className="tours-wrapper py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Layout principal: Sidebar + Contenido (column-reverse en móvil como el CSS original) */}
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8">

            {/* ============ SIDEBAR (Filtros) ============ */}
            <div className="lg:col-span-4 lg:sticky lg:top-[90px] self-start">
              <div className="tour-cate-wrap">
                {/* Header del sidebar */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-5">
                  <h2 className="text-2xl font-bold text-gray-900">Criteria</h2>
                  <button className="w-[150px] h-[45px] rounded-lg bg-[var(--primary-color)] text-white font-semibold hover:bg-[var(--primary-dark)] transition-colors">
                    Clear All
                  </button>
                </div>

                {/* Filtro: Destination */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl mb-4">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Destination</h2>
                  <div className="space-y-2">
                    {['Canada', 'Emirates', 'Europe', 'France'].map((dest, idx) => (
                      <label key={idx} className="flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 rounded transition">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4300e7] focus:ring-[#4300e7]" />
                          <span className="text-gray-700 font-medium">{dest}</span>
                        </div>
                        <span className="w-[30px] h-[30px] rounded-full bg-[#EFEFEF] flex items-center justify-center text-xs font-semibold text-[var(--pg-color)]">
                          {idx === 2 ? 1 : 2}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro: Activities */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl mb-4">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Activities</h2>
                  <div className="space-y-2">
                    {['Boating', 'City Tour', 'Kayaking', 'Niagara Falls'].map((act, idx) => (
                      <label key={idx} className="flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 rounded transition">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4300e7] focus:ring-[#4300e7]" />
                          <span className="text-gray-700 font-medium">{act}</span>
                        </div>
                        <span className="w-[30px] h-[30px] rounded-full bg-[#EFEFEF] flex items-center justify-center text-xs font-semibold text-[var(--pg-color)]">
                          {7 - idx}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filtro: Trip Types */}
                <div className="bg-[#F7F7F7] p-4 rounded-xl">
                  <h2 className="text-xl font-semibold mb-3 text-gray-800">Trip Types</h2>
                  <div className="space-y-2">
                    {['Luxury', 'Premium', 'Standard'].map((type, idx) => (
                      <label key={idx} className="flex items-center justify-between p-2 border-b border-gray-200 cursor-pointer hover:bg-gray-100 rounded transition">
                        <div className="flex items-center gap-2">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#4300e7] focus:ring-[#4300e7]" />
                          <span className="text-gray-700 font-medium">{type}</span>
                        </div>
                        <span className="w-[30px] h-[30px] rounded-full bg-[#EFEFEF] flex items-center justify-center text-xs font-semibold text-[var(--pg-color)]">
                          {idx === 2 ? 1 : 10 + idx}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ============ MAIN CONTENT (Grid de Tours) ============ */}
            <div className="lg:col-span-8">
              {/* Barra de ordenamiento */}
              <div className="border border-gray-200 rounded-lg p-3 flex items-center justify-end gap-3 mb-6">
                <span className="text-lg font-medium text-gray-700">Sort :</span>
                <button className="w-[40px] h-[40px] flex items-center justify-center rounded border border-gray-400/60 text-black/60 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                  <List size={20} />
                </button>
                <button className="w-[40px] h-[40px] flex items-center justify-center rounded border border-gray-400/60 text-black/60 hover:bg-gray-100 hover:text-[var(--primary-color)] transition">
                  <Grid3x3 size={20} />
                </button>
              </div>

              {/* Grid de Tarjetas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Datas.map((tour) => (
                  <div key={tour.id} className="tour-card group relative bg-[#F7F7F7] rounded-xl overflow-hidden cursor-pointer">
                    {/* Imagen con overlay animado */}
                    <div className="tour-card-img h-[300px] overflow-hidden relative">
                      <img
                        src={tour.image}
                        alt={tour.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Overlay que crece desde abajo */}
                      <div className="absolute bottom-0 left-0 w-full h-0 bg-gradient-to-t from-[#4d00eb] to-[#193549] opacity-80 group-hover:h-full transition-all duration-300 z-[1]"></div>

                      {/* Badge de ubicación - siempre visible, arriba izquierda */}
                      <span className="absolute top-4 left-4 z-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-sm font-medium flex items-center gap-1 shadow-lg">
                        <MapPin size={16} className="fill-current" /> {tour.location}
                      </span>

                      {/* Badge de precio - siempre visible, arriba derecha */}
                      <span className="absolute top-4 right-4 z-10 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[var(--primary-color)] text-sm font-bold shadow-lg">
                        From {tour.price}
                      </span>

                      {/* Contenido revelado en hover: descripción + vista rápida */}
                      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center text-center px-8 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                        <p className="text-white text-sm leading-relaxed line-clamp-3 mb-5">
                          {tour.pere}
                        </p>
                        <Link
                          to={`/tour-details/${tour.id}`}
                          state={{ tours: tour }}
                          className="pointer-events-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--primary-color)] hover:scale-110 transition-transform shadow-lg"
                          aria-label="Vista rápida"
                        >
                          <Eye size={20} />
                        </Link>
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="p-4">
                      <Link to={`/tour-details/${tour.id}`} state={{ tours: tour }} className="block">
                        <h2 className="text-xl font-semibold text-gray-900 group-hover:underline transition-all">
                          {tour.name}
                        </h2>
                      </Link>

                      {/* Footer de la tarjeta */}
                      <div className="border-t border-gray-200 pt-3 mt-3 flex items-center justify-between">
                        <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-700">
                          <Clock size={16} /> {tour.days}
                        </p>
                        <Link
                          to={`/tour-details/${tour.id}`}
                          state={{ tours: tour }}
                          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#4300e7] to-[#7d00fc] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============ GALLERY SWIPER ============ */}
      <section className="gallery-grid my-5 mb-0 overflow-hidden">
        <Swiper
          slidesPerView={3}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            575: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1300: { slidesPerView: 5 },
          }}
          className="gallery-swiper"
        >
          {[galleryimage1, galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage2, galleryimage3].map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-image relative overflow-hidden cursor-pointer">
                <img
                  src={img}
                  alt={`gallery-${index}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Tours;