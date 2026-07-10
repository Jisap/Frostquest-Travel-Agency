import React from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

// Imágenes
import star from '../../assets/star.webp';
import destinationimage1 from '../../../public/Images/Destination-6.webp';
import destinationimage2 from '../../../public/Images/Destination-7.webp';
import destinationimage3 from '../../../public/Images/Destination-8.webp';
import travelIcon1 from '../../assets/travel-icon1.webp';
import travelIcon2 from '../../assets/travel-icon2.webp';
import tst1 from '../../assets/tst-1.webp';
import tst2 from '../../assets/tst-2.webp';
import tst3 from '../../assets/tst-3.webp';
import tst4 from '../../assets/tst-4.webp';
import travelexperienceimage1 from '../../assets/experience-image1.webp';
import travelexperienceimage2 from '../../assets/experience-image2.webp';
import travelexperienceimage3 from '../../assets/experience-image3.webp';
import travelplace from '../../assets/place-image.webp';
import placeelement from '../../assets/place-element.webp';
import brandimage1 from '../../assets/brand-image1.webp';
import brandimage2 from '../../assets/brand-image2.webp';
import brandimage3 from '../../assets/brand-image3.webp';
import brandimage4 from '../../assets/brand-image4.webp';
import brandimage5 from '../../assets/brand-image5.webp';
import price1 from '../../assets/price-1.webp';
import price2 from '../../assets/price-2.webp';
import price3 from '../../assets/price-3.webp';
import price4 from '../../assets/price-4.webp';
import price5 from '../../assets/price-5.webp';
import price6 from '../../assets/price-6.webp';
import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';
import SectionBanner from "../SectionBanner";
import { Check, Link2, Play } from "lucide-react";

function About() {
  // Datos de destinos
  const destinations = [
    { id: 1, img: destinationimage1, title: "Rome, Italy", days: "4 Days", price: "$800" },
    { id: 2, img: destinationimage2, title: "Paris, France", days: "8 Days", price: "$1200" },
    { id: 3, img: destinationimage3, title: "New York, USA", days: "7 Days", price: "$1500" }
  ];

  // Datos de testimonios
  const testimonials = [
    { id: 1, img: tst2, name: "Hamza Khan", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 2, img: tst4, name: "Ishin Korma", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 3, img: tst1, name: "Victoria Wotton", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" },
    { id: 4, img: tst3, name: "Wastson Karm", role: "Fementum Odio Co.", text: "We don't just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete" }
  ];

  // Datos de precios
  const pricingPlans = [
    { id: 1, price: "99", img1: price1, img2: price2, title: "Turkey Tour", features: ["Generation Technology", "Audio Performance", "Generation Technology", "Generation Technology"] },
    { id: 2, price: "79", img1: price3, img2: price4, title: "Full Travel", features: ["Generation Technology", "Audio Performance", "Generation Technology", "Generation Technology"] },
    { id: 3, price: "49", img1: price5, img2: price6, title: "World Tour", features: ["Generation Technology", "Audio Performance", "Generation Technology", "Generation Technology"] }
  ];

  // Datos de marcas
  const brands = [brandimage1, brandimage2, brandimage3, brandimage4, brandimage5, brandimage1];

  // Datos de galería
  const galleryImages = [galleryimage1, galleryimage2, galleryimage3, galleryimage4, galleryimage5, galleryimage2, galleryimage3];

  return (
    <>
      {/* ============ SECTION BANNER ============ */}
      <SectionBanner title="About" currentPage="About" />

      {/* ============ TOP DESTINATIONS ============ */}
      <section className="top-destinations py-12 md:py-20">
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
                <div className="top-destination-image relative h-[398px] overflow-hidden">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover" />


                  <div className="top-destination-icons">
                    <div className="icon-box">
                      <Play size={28} />
                    </div>
                    <div className="icon-box">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRAVEL EXPERIENCE ============ */}
      <section className="travel-experience py-16 md:py-24" style={{ backgroundImage: 'url(assets/Experience-bg.webp)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={star}
                  alt="star"
                  className="w-6 h-6"
                />
                <h3 className="m-0 text-2xl font-bold">Get To Know Us</h3>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Get the Best Travel Experience</h2>

              <ul className="list-none p-0">
                <li className="flex items-start gap-4 pb-6">
                  <img
                    src={travelIcon1}
                    alt="travel-icon"
                    className="w-[50px] h-[50px] rounded-full bg-white flex-shrink-0"
                  />

                  <div>
                    <h4 className="font-extrabold text-xl mb-2">Best of Hotel</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We don't just work with concrete and steel. <br />
                      We are Approachable, with even our highest
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4 pb-6">
                  <img
                    src={travelIcon2}
                    alt="travel-icon"
                    className="w-[50px] h-[50px] rounded-full bg-white flex-shrink-0"
                  />

                  <div>
                    <h4 className="font-extrabold text-xl mb-2">Friendly price</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We don't just work with concrete and steel. <br />
                      We are Approachable, with even our highest
                    </p>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
                <button className="custome-btn2">
                  <a href="#">Find out more</a>
                </button>

                <div className="travel-experience-user flex items-center ps-0 sm:ps-4">
                  <img src={tst1} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-2 first:ml-0" />
                  <img src={tst2} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <img src={tst3} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <img src={tst4} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <span className="bg-primary border-2 border-white text-white px-3 py-3 rounded-full -ml-3 text-sm font-semibold">50+</span>
                </div>
              </div>
            </div>

            {/* Columna derecha - Grid de imágenes */}
            <div className="grid grid-cols-2 gap-3">
              <div className="travel-experience-image travel-experience-image-mb relative rounded-lg overflow-hidden">
                <img
                  src={travelexperienceimage1}
                  alt="America"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 p-2 bg-[#F1EBE6] text-gray-800 text-sm font-bold z-10 rounded-sm">America</span>
              </div>

              <div className="travel-experience-image relative rounded-lg overflow-hidden">
                <img
                  src={travelexperienceimage3}
                  alt="Africa"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 p-2 bg-[#F1EBE6] text-gray-800 text-sm font-bold z-10 rounded-sm">Africa</span>
              </div>

              <div className="travel-experience-image travel-experience-image-mb relative rounded-lg overflow-hidden">
                <img
                  src={travelexperienceimage2}
                  alt="Asia"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 p-2 bg-[#F1EBE6] text-gray-800 text-sm font-bold z-10 rounded-sm">Asia</span>
              </div>

              <div className="travel-experience-image relative rounded-lg overflow-hidden">
                <img
                  src={travelexperienceimage3}
                  alt="Europe"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 left-0 p-2 bg-[#F1EBE6] text-gray-800 text-sm font-bold z-10 rounded-sm">Europe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRAVEL PLACES ============ */}
      <section className="travel-places py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Columna izquierda */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={star} alt="star" className="w-6 h-6" />
                <h3 className="m-0 text-2xl font-bold">Get To Know Us</h3>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Travel place for <br /> Your & your <br /> Family
              </h2>

              <div className="mt-6">
                <div className="travel-experience-user flex items-center pb-2">
                  <img src={tst1} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-2 first:ml-0" />
                  <img src={tst2} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <img src={tst3} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <img src={tst4} alt="user" className="w-[50px] h-[50px] rounded-full border-2 border-white -ml-3" />
                  <span className="bg-primary border-2 border-white text-white px-3 py-3 rounded-full -ml-3 text-sm font-semibold">50+</span>
                </div>
                <p className="font-bold text-xl md:text-2xl">500K+ Happy Customer</p>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="travel-places-image relative">
                <img
                  src={travelplace}
                  alt="travel-place"
                  className="w-full h-auto rounded-[200px] md:rounded-[200px] object-cover"
                />
              </div>

              <div className="travel-places-info">
                <h4 className="font-medium text-xl md:text-2xl mb-4">Waiting for adventures? Don't miss them</h4>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We don't just work with concrete and steel.
                  We are Approachable, with even our highest
                  concrete and steel. We work with people
                </p>

                <div className="place-text flex gap-3 items-center shadow-lg p-4 mb-6 rounded-2xl mt-4 bg-white w-full">
                  <img
                    src={placeelement}
                    alt="place"
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <h6 className="text-lg md:text-xl font-extrabold m-0">We Have More than 10 years of experience</h6>
                </div>

                <ul className="list-none p-0 pt-4">
                  <li className="pb-3 text-lg font-extrabold font-urbanist flex items-center gap-2">
                    <span className="bg-primary p-2 rounded-full flex items-center justify-center">
                      <Check className="text-white w-4 h-4" strokeWidth={3} />
                    </span>
                    Generation Technology
                  </li>

                  <li className="pb-3 text-lg font-extrabold font-urbanist flex items-center gap-2">
                    <span className="bg-primary p-2 rounded-full flex items-center justify-center">
                      <Check className="text-white w-4 h-4" strokeWidth={3} />
                    </span>
                    Generation Technology
                  </li>

                  <li className="pb-3 text-lg font-extrabold font-urbanist flex items-center gap-2">
                    <span className="bg-primary p-2 rounded-full flex items-center justify-center">
                      <Check className="text-white w-4 h-4" strokeWidth={3} />
                    </span>
                    Audio Performance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ BUSINESS BANNER (Marcas) ============ */}
      <section className="businesse-banner py-16" style={{ backgroundColor: '#F7FFC4' }}>
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

      {/* ============ REVIEWS ============ */}
      <section className="py-16 md:py-20">
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
                speed={600}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[EffectCards, Autoplay]}
                className="ab-tst-swiper"
              >
                {testimonials.map((tst) => (
                  <SwiperSlide key={tst.id}>
                    <div className="ab-tst-item bg-primary p-8 md:p-12 rounded-[30px] flex flex-col justify-start text-white relative overflow-hidden min-h-[400px]">
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
                          <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
                          <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
                          <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
                          <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
                          <i className="fa-solid fa-star text-yellow-300 text-xl"></i>
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

      {/* ============ PRICING ============ */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src={star} alt="star" className="w-6 h-6" />
              <h3 className="m-0 text-2xl font-bold">Get To Know Us</h3>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Best Holiday Package</h2>
          </div>

          {/* Grid de precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.id} className="price-card bg-white shadow-2xl rounded-2xl p-8 md:p-10 text-left border-0 h-full flex flex-col">
                <h2 className="text-5xl md:text-6xl font-bold mb-4">
                  <sup className="text-2xl">$</sup>{plan.price}<small className="text-2xl font-bold">/month</small>
                </h2>

                <div className="flex justify-center my-6 w-full">
                  <img src={plan.img1} alt="tour1" className="w-[70%] object-cover rounded-[100px]" />
                  <img src={plan.img2} alt="tour2" className="w-[30%] rounded-full object-cover ml-3" />
                </div>

                <h4 className="font-bold text-4xl md:text-5xl mb-3">{plan.title}</h4>
                <p className="text-gray-500 text-lg mb-4">We don't just work with concret We are Approachable,</p>
                <hr className="my-4 border-gray-200" />

                <ul className="list-none p-0 text-left mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="text-lg md:text-xl font-bold mb-3 flex items-center gap-2">
                      <i className="fa-regular fa-circle-check text-primary text-xl"></i>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="custome-btn2 w-full">
                  <a href="#" className="text-capitalize">Get Started</a>
                </button>
              </div>
            ))}
          </div>

          {/* Texto inferior */}
          <p className="text-center mt-12 text-lg md:text-xl">
            Want to see our Recent News & Updates.{" "}
            <a href="#" className="text-primary no-underline font-bold hover:underline">
              Click here to View More
            </a>
          </p>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="gallery-grid mb-0 overflow-hidden">
        <Swiper
          slidesPerView={5}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="gallery-swiper"
          breakpoints={{
            1200: { slidesPerView: 5 },
            992: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {galleryImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="gallery-image relative overflow-hidden cursor-pointer">
                <img src={img} alt={`gallery-${index}`} className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default About;