
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import btnArrow from "./../../assets/btn-arrow.svg";
import plane from "../../assets/plane.svg";
import Destination from "../../Destination.json";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/react-splide/css';
import { ArrowUpRight } from 'lucide-react';
import about1 from "../../assets/about-image-1.webp";
import about2 from "../../assets/about-image-2.webp";
import tst1 from "../../assets/tst-1.webp";
import tst2 from "../../assets/tst-2.webp";
import tst3 from "../../assets/tst-3.webp";
import tst4 from "../../assets/tst-4.webp";
import checkImg from "../../assets/about-check.svg";
import abElement1 from "../../assets/about-element-1.webp";
import abElement2 from "../../assets/about-element-2.webp";
import abElement3 from "../../assets/about-element-3.webp";
import { Play } from 'lucide-react'
import { MapPin } from 'lucide-react'
import DiscoverImg1 from '../../assets/discover-image-1.webp'
import DiscoverImg2 from '../../assets/discover-image-2.webp'
import DiscoverImg3 from '../../assets/discover-image-3.webp'
import DiscoverImg4 from '../../assets/discover-image-4.webp'

const Index = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const features = [
    'Perfect Detailing',
    'Completed Certification',
    'Save Your Budget',
    'Free Consultations',
  ];
  const cards = [
    { img: DiscoverImg1, place: 'Maldives' },
    { img: DiscoverImg2, place: 'Vietnam' },
    { img: DiscoverImg3, place: 'Dubai' },
    { img: DiscoverImg4, place: 'Nepal' },
  ]

  return (
    <>
      {/* Hero slider */}
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect={'fade'}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          className='overflow-hidden'
        >
          <SwiperSlide>
            <div className='hero hero1 flex flex-col justify-center items-center'>
              <div className='hero-content w-full flex flex-col justify-center items-center'>
                <h2 className='text-white opacity-0 animate-[Anim-top_0.3s_0.9s_forwards_linear]'>
                  THE KINGDOM OF ICE
                </h2>

                <h1 className='hero-title text-white font-urbanist font-bold opacity-0 animate-[Anim-height_0.3s_0.3s_forwards_linear]'>
                  Green Lan
                </h1>

                <button className='hero-btn text-white mt-5'>
                  LEARN MORE <img src={btnArrow} className='w-5 h-auto' alt='btn' />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='hero hero2 flex flex-col justify-center items-center'>
              <div className='hero-content w-full flex flex-col justify-center items-center'>
                <h2 className='text-white opacity-0 animate-[Anim-top_0.3s_0.9s_forwards_linear]'>
                  THE KINGDOM OF ICE
                </h2>

                <h1 className='hero-title text-white font-urbanist font-bold opacity-0 animate-[Anim-height_0.3s_0.3s_forwards_linear]'>
                  Green Lan
                </h1>

                <button className='hero-btn text-white mt-5'>
                  LEARN MORE <img src={btnArrow} className='w-5 h-auto' alt='btn' />
                </button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='hero hero3 flex flex-col justify-center items-center'>
              <div className='hero-content w-full flex flex-col justify-center items-center'>
                <h2 className='text-white opacity-0 animate-[Anim-top_0.3s_0.9s_forwards_linear]'>
                  THE KINGDOM OF ICE
                </h2>

                <h1 className='hero-title text-white font-urbanist font-bold opacity-0 animate-[Anim-height_0.3s_0.3s_forwards_linear]'>
                  Green Lan
                </h1>

                <button className='hero-btn text-white mt-5'>
                  LEARN MORE <img src={btnArrow} className='w-5 h-auto' alt='btn' />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Controles del slider — fuera del hero, sin solapamiento */}
        <div className="slider-controls">
          <button className="swiper-prev slider-btn" aria-label="Previous slide">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="slider-dots">
            <span className="slider-dot active"></span>
            <span className="slider-dot"></span>
            <span className="slider-dot"></span>
          </div>

          <button className="swiper-next slider-btn" aria-label="Next slide">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>


      {/* Destinations */}
      <div className='destinations py-20'>
        <div className='section-title'>
          <div className='text-center flex flex-col justify-center items-center gap-3'>
            <span className='flex items-center gap-2 font-kings text-primary uppercase text-lg font-light tracking-wider'>
              <img src={plane} className='w-6 h-6' alt="" />
              <span>Travel destination</span>
              <img src={plane} className='w-6 h-6' alt="" />
            </span>

            <h2 className='font-urbanist text-3xl! md:text-5xl! font-bold text-dark'>Top Destinations</h2>

            <p className='text-base sm:text-lg text-center w-full px-6 text-secondary font-urbanist leading-relaxed'>
              Explore our top destinations voted by more than 100,000+ customers around the world
            </p>
          </div>
        </div>

        <div className='destination-wrapper mt-12'>
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              gap: 30,
              perPage: 3,
              arrows: false,
              pagination: false,
              autoScroll: {
                speed: 1,
                autoStart: true,
              },
              breakpoints: {
                1199: { perPage: 3 },
                911: { perPage: 2 },
                767: { perPage: 2 },
                575: { perPage: 1 },
                0: { perPage: 1 }
              }
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {Destination.map((dest) => (
                <SplideSlide key={dest.id}>
                  <div className='dest-card group relative transition-transform duration-regular hover:-translate-y-2'>
                    {/* Imagen */}
                    <div className='relative overflow-hidden rounded-2xl h-[450px]'>
                      <img
                        src={dest.image}
                        className='w-full h-full object-cover transition-transform duration-regular group-hover:scale-110'
                        alt={dest.name}
                      />
                      {/* Precio - Badge con gradiente */}
                      <span className='absolute top-5 right-5 bg-[image:var(--color-prim-gradient)] text-white font-semibold font-urbanist px-4 py-2 rounded-lg text-sm'>
                        {dest.price}
                      </span>
                    </div>

                    {/* Contenido flotante - Posicionado en la parte inferior izquierda */}
                    <div className='absolute bottom-0 left-0 mx-4 mb-4 bg-white rounded-xl p-6 shadow-lg w-[65%]'>
                      {/* Círculo decorativo con flecha - Solo visible en hover */}
                      <div className='absolute top-3 right-3 w-5 h-5 bg-[image:var(--color-prim-gradient)] rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-regular '>
                        <ArrowUpRight className='size-3 text-white text-sm' />
                      </div>

                      <h3 className='font-urbanist text-2xl font-bold mb-2 text-dark'>{dest.name}</h3>
                      <p className='font-urbanist text-sm text-secondary mb-4 line-clamp-2'>{dest.pere}</p>

                      {/* Línea divisoria */}
                      <div className='border-t border-border my-3'></div>

                      <div className='flex items-center gap-2 text-sm text-dark font-medium font-urbanist'>
                        <i className='fa-solid fa-paper-plane text-primary'></i>
                        <span>{dest.days}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>

        <p className='text-center mt-12 text-lg text-secondary font-urbanist'>
          Want to See Our Top Destinations. <a href="#" className='text-primary hover:underline! transition-all duration-regular'>Click here to View More</a>
        </p>
      </div>

      {/* About  */}
      <section className="about py-14 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* ====================================================

              COLUMNA IZQUIERDA

             ==================================================== */}
            <div className="flex flex-col gap-10">
              {/* 1) Header */}
              <div className="about-title">
                <span
                  className="
                  font-['Kings'] text-[color:var(--primary-color)]
                  text-lg uppercase font-light
                  inline-flex items-center gap-2
                "
                >
                  <img src={plane} alt="" className="w-6 h-auto" />
                  About our Company
                  <img src={plane} alt="" className="w-6 h-auto" />
                </span>


                <h2
                  className="
                  mt-3 font-['Urbanist'] font-extrabold
                  text-3xl md:text-4xl lg:text-[44px] leading-tight
                "
                >
                  Experience the World with Our Company
                </h2>


                <p className="mt-5 text-base max-w-lg text-[color:var(--pg-color)]">
                  Embark on a transformative journey as company invites you to
                  experience the world, creating unforgettable memories through
                  exceptional travel adventures.
                </p>
              </div>


              {/* 2) Imagen-play + features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="about-col-img relative aspect-[5/4] w-full overflow-hidden rounded-[40px]">
                  <img
                    src={about2}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <button
                    type="button"
                    aria-label="Play video"
                    className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    z-20 w-[60px] h-[60px] rounded-full
                    flex items-center justify-center
                    bg-[image:var(--prim-gradient)]
                    shadow-lg
                    hover:scale-110 transition-transform duration-300
                  "
                  >
                    <Play className="w-7 h-7 fill-white text-white ml-1" />
                  </button>
                </div>

                <ul className="about-cols flex flex-col gap-5">
                  {features.map((title) => (
                    <li
                      key={title}
                      className="flex items-center gap-3 text-lg font-medium"
                    >
                      <img src={checkImg} alt="" className="w-5 h-5 shrink-0" />
                      <span>{title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3) CTA + avatares */}
              <div className="about-bottom flex flex-wrap items-center gap-6">
                <div className="btn-box">
                  <button className="custom-btn1">
                    Learn More
                    <img src={btnArrow} alt="" className="w-5" />
                  </button>
                </div>


                <div className="about-col-box flex items-center gap-4">
                  <div className="about-col-box-img">
                    {[tst1, tst2, tst3, tst4].map((src, i) => (
                      <img key={i} src={src} alt="" />
                    ))}
                  </div>

                  <p className="m-0 text-lg font-semibold">5.2+ Satisfied Clients</p>
                </div>
              </div>
            </div>

            {/* ====================================================

              COLUMNA DERECHA — imagen con marco beige

             ==================================================== */}
            <div className="about-img relative">
              {/* elementos flotantes (los posiciona el CSS) */}
              <img src={abElement1} alt="" className="abElement-1" />
              <img src={abElement2} alt="" className="abElement-2" />
              <img src={abElement3} alt="" className="abElement-3" />

              {/* Imagen principal */}
              <img
                src={about1}
                alt=""
                className="relative z-10 w-full block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discovery */}
      <section className="discover py-12 md:py-16 lg:py-20">


        {/* Header */}

        <div className="section-title">

          <div className="flex flex-col items-center justify-center text-center gap-3">

            <span className="inline-flex items-center gap-2">

              <img src={plane} alt="" className="w-6 h-auto" />

              <span className="font-['Kings'] text-[color:var(--primary-color)] text-lg uppercase font-light">

                Travel Destination

              </span>

              <img src={plane} alt="" className="w-6 h-auto" />

            </span>


            <h2 className="font-['Urbanist'] font-extrabold text-3xl md:text-4xl lg:text-[44px]">

              Discover the Touch of Nature

            </h2>


            <p className="text-base max-w-2xl text-[color:var(--pg-color)]">

              Our clients rave about our exceptional, seamless experiences that

              exceeded their expectations.

            </p>

          </div>

        </div>


        {/* Cards */}

        <div className="container mx-auto max-w-7xl px-6 mt-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 justify-items-center">

            {cards.map(({ img, place }) => (

              <div key={place} className="discover-card group relative w-full overflow-hidden">

                <img

                  src={img}

                  alt={place}

                  className="discover-card-img absolute inset-0 w-full h-full object-cover"

                />


                <div className="discover-card-content absolute w-[90%] h-[90%] flex flex-col items-center justify-center text-center bg-[#212529]/60 backdrop-blur-[5px] text-white p-5">

                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-[image:var(--prim-gradient)] rounded-full">

                    <MapPin className="w-4 h-4" />

                    {place}

                  </span>

                  <h2 className="mt-4 text-xl md:text-2xl font-medium w-4/5">

                    Beautiful tropical beach sea with umbrella chair around

                    swimming pool

                  </h2>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>






    </>
  )
}

export default Index