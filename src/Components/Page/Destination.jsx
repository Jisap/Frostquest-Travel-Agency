import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Link2, Star } from 'lucide-react';
import { FaStar } from 'react-icons/fa';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

// Componente reutilizable
import SectionBanner from '../SectionBanner';

// Imágenes
import star from '../../assets/star.webp';
import destinationimage1 from '../../../public/Images/Destination-6.webp';
import destinationimage2 from '../../../public/Images/Destination-7.webp';
import destinationimage3 from '../../../public/Images/Destination-8.webp';
import brandimage1 from '../../assets/brand-image1.webp';
import brandimage2 from '../../assets/brand-image2.webp';
import brandimage3 from '../../assets/brand-image3.webp';
import brandimage4 from '../../assets/brand-image4.webp';
import brandimage5 from '../../assets/brand-image5.webp';
import tst1 from '../../assets/tst-1.webp';
import tst2 from '../../assets/tst-2.webp';
import tst3 from '../../assets/tst-3.webp';
import tst4 from '../../assets/tst-4.webp';
import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';

function Destination() {
  // Datos de destinos
  const destinations = [
    { id: 1, img: destinationimage1, title: "Rome, Italy", days: "4 Days", price: "$0" },
    { id: 2, img: destinationimage2, title: "Paris, France", days: "8 Days", price: "$0" },
    { id: 3, img: destinationimage3, title: "New York, USA", days: "7 Days", price: "$0" }
  ];

  // Datos de marcas
  const brands = [brandimage1, brandimage2, brandimage3, brandimage4, brandimage5, brandimage1];

  // Datos de testimonios
  const testimonials = [
    { id: 1, img: tst2, name: "Hamza Khan", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 2, img: tst4, name: "Ishin Korma", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 3, img: tst1, name: "Victoria Wotton", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 4, img: tst3, name: "Wastson Karm", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" }
  ];

  // Datos de galería
  const galleryImages = [galleryimage1, galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage2, galleryimage3];

  return (
    <>
      {/* 1. Banner Reutilizable */}
      <SectionBanner title="Destination" currentPage="Destination" />

      {/* 2. Top Destinations */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={star} alt="star-image" className="w-6 h-6" />
              <h3 className="m-0 text-2xl font-bold">Get To Know Us</h3>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Top Destinations</h2>
          </div>

          {/* Grid de tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="top-destination-item mx-auto w-full max-w-[390px] overflow-hidden rounded-[40px] bg-white shadow-[0px_11px_40px_0px_rgba(0,0,0,0.04)] cursor-pointer mb-10">
                <Link to={`/destinationDetails/${dest.id}`} className="block">
                  <div className="top-destination-image relative h-[398px] overflow-hidden">
                    <img src={dest.img} alt={dest.title} className="w-full h-full object-cover" />

                    {/* Iconos con Lucide React */}
                    <div className="top-destination-icons absolute inset-0 flex justify-center items-center gap-5 z-10">
                      <div className="icon-box bg-white h-[70px] w-[70px] text-2xl flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:text-white">
                        <Play size={28} />
                      </div>
                      <div className="icon-box bg-white h-[70px] w-[70px] text-2xl flex justify-center items-center rounded-full cursor-pointer transition-all duration-300 hover:text-white">
                        <Link2 size={28} />
                      </div>
                    </div>
                  </div>

                  <div className="top-destination-content">
                    <div className="dest-title-price flex justify-between items-center border-b border-gray-200 px-4 py-4">
                      <h3 className="text-xl font-extrabold m-0">{dest.title}</h3>
                      <span className="text-xl font-extrabold m-0">{dest.price}</span>
                    </div>
                    <div className="trip-time px-6 py-4 text-xl font-extrabold flex items-center gap-2">
                      <i className="fa-solid fa-location-arrow pe-1"></i>
                      {dest.days}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Business Banner (Marcas) */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#F7FFC4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Trusted By Local Businesses</h2>
          </div>

          <Splide
            className="banner-splide"
            options={{
              perPage: 5,
              loop: true,
              type: 'loop',
              gap: '1rem',
              pagination: false,
              arrows: false,
              autoplay: true,
              breakpoints: {
                1200: { perPage: 4 },
                992: { perPage: 3 },
                768: { perPage: 2 },
                576: { perPage: 1 },
              },
            }}
          >
            {brands.map((brand, index) => (
              <SplideSlide key={index}>
                <div className="brand-image text-center py-4">
                  <img src={brand} alt="brand-image" className="mx-auto max-h-20 object-contain" />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      {/* 4. Reviews (Testimonios con Swiper Cards) */}
      <section className="py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={star} alt="star" className="w-6 h-6" />
                <h3 className="m-0 text-2xl font-bold">Get To Know Us</h3>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">What People Say About us</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We don't just work with concrete and steel. We are
                Approachable, with even our highest concrete and steel.
                We work with people
              </p>
              <button className="custome-btn2">
                <a href="#">Find out more</a>
              </button>
            </div>

            {/* Columna derecha - Swiper Cards */}
            <div>
              <Swiper
                effect={'cards'}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[EffectCards, Autoplay]}
                className="ab-tst-swiper"
              >
                {testimonials.map((tst) => (
                  <SwiperSlide key={tst.id}>
                    <div className="ab-tst-item bg-[var(--primary-color)] p-8 md:p-12 rounded-[30px] flex flex-col justify-start text-white relative overflow-hidden min-h-[400px]">
                      <img src={tst.img} alt={tst.name} className="w-[90px] h-[90px] rounded-full mb-5 object-cover" />
                      <p className="text-lg md:text-xl mb-8 leading-relaxed">
                        {tst.text}
                      </p>
                      <div className="ab-tst-bottom flex justify-between items-center w-full mt-auto">
                        <div>
                          <h3 className="bg-white text-gray-800 text-xl px-5 py-2 rounded-tl-[30px] rounded-tr-[30px] rounded-br-[30px] mb-2 font-bold">
                            {tst.name}
                          </h3>
                          <span className="bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-br-[30px] rounded-bl-[30px] inline-block">
                            {tst.role}
                          </span>
                        </div>
                        <div className="ab-star flex gap-1">
                          <FaStar className="text-yellow-300 text-xl" />
                          <FaStar className="text-yellow-300 text-xl" />
                          <FaStar className="text-yellow-300 text-xl" />
                          <FaStar className="text-yellow-300 text-xl" />
                          <FaStar className="text-yellow-300 text-xl" />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Gallery Swiper */}
      <section className="gallery-grid mb-0 overflow-hidden">
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
          {galleryImages.map((img, index) => (
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

export default Destination;