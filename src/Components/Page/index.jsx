
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
import steps1 from "./../../assets/steps-1.svg";
import steps2 from "./../../assets/steps-2.svg";
import steps3 from "./../../assets/steps-3.svg";
import FeatureImg1 from "./../../assets/feature-image-1.webp";
import FeatureImg2 from "./../../assets/feature-image-2.webp";
import offerBG1 from "../../assets/offer-bg-1.webp"
import offerBG2 from "../../assets/offer-bg-2.webp"
import tstimage from '../../assets/tst-image-1.webp' // Imagen que no debe cambiar, situada a la izquierda de los testimonios
import tstimg1 from '../../assets/tst-1.webp'
import tstimg2 from '../../assets/tst-2.webp'
import tstimg3 from '../../assets/tst-3.webp'
import tstimg4 from '../../assets/tst-4.webp'


import quote from '../../assets/quote-left.png'
import testBG from '../../assets/test-bg.webp'

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

  const steps = [

    {

      img: steps1,

      title: 'Choose Destination',

      desc: 'Lobortis luctus neque duis lacinia volutp suspendisse pulviner pen atibus malesu ada placerat...',

      variant: '',

    },

    {

      img: steps2,

      title: 'Make Payment',

      desc: 'Lobortis luctus neque duis lacinia volutp suspendisse pulviner pen atibus malesu ada placerat...',

      variant: 'step-img2',

    },

    {

      img: steps3,

      title: 'Reach Airport on Date',

      desc: 'Lobortis luctus neque duis lacinia volutp suspendisse pulviner pen atibus malesu ada placerat...',

      variant: 'step-img3',

    },

  ]

  // Datos de los testimonios
  const testimonials = [
    {
      id: 1,
      image: tstimg2,
      name: "TASHA STEWART",
      role: "Web Developer at ThemeXriver",
      text: "Booking with this travel agency was a game changer their meticulous planning and personalized approach made our trip not just a vacation but a collection of unforgettable moments. From seamless logistics to hidden gems, they turned our travel dreams into a reality, earning our trust and loyalty."
    },
    {
      id: 2,
      image: tstimg3,
      name: "MICHAEL JOHNSON",
      role: "Travel Enthusiast",
      text: "The attention to detail and personalized service exceeded all expectations. Every aspect of our journey was perfectly orchestrated, creating memories that will last a lifetime. Highly recommend their services!"
    },
    {
      id: 3,
      image: tstimg4,
      name: "SARAH WILLIAMS",
      role: "Adventure Seeker",
      text: "From start to finish, the experience was flawless. The team went above and beyond to ensure every detail was perfect. They truly understand what travelers need and deliver exceptional results."
    }
  ];


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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
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

      {/* Working Steps */}
      <section className="working relative overflow-hidden py-12 lg:py-20">

        {/* Decorativas */}
        <img src={FeatureImg1} alt="" className="featureImg featureImg1 absolute pointer-events-none" />
        <img src={FeatureImg2} alt="" className="featureImg featureImg2 absolute pointer-events-none" />

        {/* Contenido */}
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          {/* Header */}
          <div className="section-title">
            <div className="flex flex-col items-center text-center md:items-start md:text-left gap-3">
              <span className="inline-flex items-center gap-2">
                <img src={plane} alt="" className="w-6 h-auto" />
                <span className="font-['Kings'] text-[color:var(--primary-color)] text-lg uppercase font-light">
                  Working Steps
                </span>
                <img src={plane} alt="" className="w-6 h-auto" />
              </span>

              <h2 className="font-['Urbanist'] font-extrabold text-3xl md:text-4xl lg:text-[44px] leading-tight">
                Book Your next Trip <br className="hidden md:block" /> in 3 Steps
              </h2>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 max-w-5xl mx-auto">
            {steps.map(({ img, title, desc, variant }) => (
              <div key={title} className="step-card group cursor-pointer flex flex-col w-full mx-auto sm:mx-0">
                <div className={`step-img ${variant} flex items-center justify-center`}>
                  <img src={img} alt="" className="w-9 h-9" />
                </div>

                <div className="step-content mt-4 flex flex-col gap-2">
                  <h2 className="text-xl md:text-2xl font-semibold text-[color:var(--text-color)]">
                    {title}
                  </h2>
                  <p className="text-base text-[color:var(--pg-color)]">{desc}</p>
                </div>
              </div>
            ))}

            {/* Relleno del hueco: solo visible entre sm y lg (2 columnas) */}
            <div className="step-gap-filler hidden sm:flex lg:hidden items-center justify-center">
              <img src={FeatureImg2} alt="" className="pointer-events-none select-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="offers relative overflow-hidden">

        {/* Imagen decorativa izquierda (Fondo absoluto) */}
        <img src={offerBG1} alt="" className="offer-img absolute pointer-events-none" />

        {/* Imagen decorativa derecha (Fondo absoluto) */}
        <img src={offerBG2} alt="" className="offer-img2 absolute pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">

          {/* CAMBIO CLAVE: Usamos justify-center en lugar de justify-between y añadimos un max-w para que no se dispersen */}
          <div className="offers-wrapper flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 xl:gap-6 py-14 max-w-5xl mx-auto">

            {/* Columna de texto (Reducimos ligeramente el ancho máximo para compactarlo) */}
            <div className="section-title offer-title flex flex-col gap-6 w-full lg:w-7/12 shrink-0 max-w-xl">
              <div className="flex flex-col items-start gap-3">
                <span className="inline-flex items-center gap-2">
                  <img src={plane} alt="" className="w-6 h-auto" />
                  <span className="font-['Kings'] text-[color:var(--primary-color)] text-lg uppercase font-light">
                    40% offer
                  </span>
                  <img src={plane} alt="" className="w-6 h-auto" />
                </span>

                <h2 className="font-['Urbanist'] font-extrabold text-4xl md:text-5xl lg:text-[64px] leading-tight text-[color:var(--text-color)]">
                  Get Special Offer
                </h2>

                <p className="text-base md:text-lg text-[color:var(--pg-color)]">
                  Embark on an unforgettable journey with our exclusive tour
                  special offer seize the moment and create lasting memories.
                </p>
              </div>

              <div className="btn-box offer-btn">
                <button className="custom-btn1">
                  Learn More
                  <img src={btnArrow} alt="" className="img-fluid ms-2 w-4" />
                </button>
              </div>
            </div>

            {/* Columna visual (Ahora se alinea al inicio o centro en pantallas grandes para estar pegada al texto) */}
            <div className="offer-visual w-full lg:w-5/12 flex items-center justify-center lg:justify-start shrink-0">
              <div className="offer-text relative flex-shrink-0">
                <h1 className="flex items-center font-semibold text-[color:var(--primary-color)] font-['Poppins']">
                  40
                  <span className="offer-span flex flex-col text-black ml-2">
                    %
                    <span className="font-['Poppins'] font-semibold">off</span>
                  </span>
                </h1>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial py-16 position-relative overflow-hidden">
        {/* Imágenes de fondo decorativas */}
        <img
          src={testBG}
          className="absolute top-0 right-0 w-full h-full object-cover opacity-30 test-bg-img"
          alt=""
        />
        <img
          src={testBG}
          className="absolute top-0 left-0 w-full h-full object-cover test-bg-img2"
          style={{ transform: 'rotate(180deg)' }}
          alt=""
        />

        {/* Título y descripción */}
        <div className="section-title test-title max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col items-center justify-center gap-3 text-center">
            <span className="flex items-center gap-2">
              <img src={plane} alt="" className="w-5 h-5" />
              <span className="text-purple-600 font-medium tracking-wider text-sm uppercase">Testimonials</span>
              <img src={plane} alt="" className="w-5 h-5" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What's Our Clients Saying!
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Our clients rave about our exceptional the seamless experiences
              that exceeded their expectations.
            </p>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Columna Izquierda - Imagen ESTÁTICA */}
            <div className="lg:col-span-1">
              <div className="test-img relative flex items-center justify-center">
                <img
                  src={tstimage}
                  className="w-full h-auto relative z-[1]"
                  alt="Testimonial"
                />
              </div>
            </div>

            {/* Columna Derecha - Swiper con contenido DINÁMICO */}
            <div className="lg:col-span-1">
              <Swiper
                modules={[Autoplay]}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                className="test-Swiper"
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className="test-content">
                      <img
                        src={quote}
                        className="w-16 h-16 mb-4 test-content-img"
                        alt="Quote"
                      />
                      <p className="text-xl leading-8 text-gray-700 mb-6 test-pere">
                        "{testimonial.text}"
                      </p>

                      {/* Estrellas */}
                      <div className="test-stars flex items-center mb-4">
                        <i className="bi bi-star-fill text-[#F2994A] text-2xl ml-2"></i>
                        <i className="bi bi-star-fill text-[#F2994A] text-2xl ml-2"></i>
                        <i className="bi bi-star-fill text-[#F2994A] text-2xl ml-2"></i>
                        <i className="bi bi-star-fill text-[#F2994A] text-2xl ml-2"></i>
                        <i className="bi bi-star-fill text-[#F2994A] text-2xl ml-2"></i>
                      </div>

                      {/* Usuario */}
                      <div className="test-user flex items-center gap-3 mt-6">
                        <img
                          src={testimonial.image}
                          className="w-20 h-20 rounded-full border-2 border-purple-600 p-1 object-cover"
                          alt={testimonial.name}
                        />
                        <div className="test-user-info">
                          <h3 className="text-2xl font-bold text-gray-900 leading-6">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600 font-medium m-0">
                            {testimonial.role}
                          </p>
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


    </>
  )
}

export default Index