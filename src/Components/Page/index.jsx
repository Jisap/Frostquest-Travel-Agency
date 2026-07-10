
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
import blog1 from '../../assets/blog-1.webp'
import blog2 from '../../assets/blog-2.webp'
import blog3 from '../../assets/blog-3.webp'
import bannerImg from '../../assets/banner.webp'
import footer from '../../assets/footer.webp'


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

  const blogPosts = [
    { id: 1, img: blog1, title: "Beach Days, Long Hikes, And" },
    { id: 2, img: blog3, title: "Island Hopping And Weather Tips" },
    { id: 3, img: blog2, title: "Assertively iterate resource maximizing" }
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

      {/* Banner */}
      <section className="blog-banner relative flex justify-center items-center py-5 overflow-hidden">

        {/* Overlay oscuro para mejorar el contraste del texto blanco */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Contenido centrado */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

          <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold leading-tight w-full md:w-[80%] mx-auto mb-6 sm:mb-8">
            FrostQuest Is A World Leading Online Tour Booking Platform
          </h2>

          {/* Botón centrado */}
          <div className="btn-box mt-4 sm:mt-5 flex justify-center">
            <button className="btn custom-btn1">
              Learn More
              <img src={btnArrow} className='img-fluid ms-2' alt="" />
            </button>
          </div>

        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header: Título + Descripción */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="md:w-1/2">
              <span className="text-primary font-bold uppercase tracking-wider text-sm">BLOG & NEWS</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight text-gray-900">
                Get More Update <br /> News & Blog
              </h2>
            </div>
            <p className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
              Stay informed and inspired by subscribing to our newsletter for the latest news and insightful blog posts – your gateway to a world of updates.
            </p>
          </div>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card group relative overflow-hidden cursor-pointer aspect-[4/5] rounded-2xl">

                {/* Imagen con efecto zoom */}
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Contenedor Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">

                  {/* Caja de detalles con animación */}
                  <div className="relative bg-white rounded-[15px] p-5 overflow-hidden transition-transform duration-300 translate-y-5 group-hover:translate-y-0 z-10 shadow-xl">

                    {/* Fondo gradiente púrpura que desliza */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4300e7] to-[#7d00fc] -top-full left-0 w-full h-full transition-all duration-500 group-hover:top-0 rounded-[15px] z-0"></div>

                    {/* Contenido de la caja */}
                    <div className="relative z-10">
                      <h5 className="text-xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300 relative w-fit">
                        {post.title}
                        {/* Línea blanca que crece debajo del título */}
                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </h5>
                      <p className="text-gray-600 text-sm mt-2 group-hover:text-white/90 transition-colors duration-300">
                        Emma Mark • April 25, 2025
                      </p>
                    </div>

                  </div>

                  {/* Badge "Read More" - ahora posicionado encima de la caja */}
                  <div className="absolute top-6 left-6 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-2 z-20">
                    <span className="px-4 py-2 bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold rounded-lg text-sm shadow-lg block">
                      Read More
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Footer con enlace */}
          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              Want to see our top destinations?{" "}
              <a href="#" className="text-primary font-semibold hover:underline transition-colors">
                Click here to View More
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white flex flex-col lg:flex-row">

        {/* Columna izquierda - Todo el contenido del footer */}
        <div className="w-full lg:w-2/3 xl:w-3/4 flex flex-col">

          {/* Footer Header - Sección de suscripción */}
          <div className="footer-head bg-primary-dark text-white py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

                {/* Título */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold leading-tight">
                    Subscribe for latest update about Travelling
                  </h2>
                </div>

                {/* Formulario de suscripción */}
                <div className="w-full md:w-auto flex justify-center md:justify-end">
                  <div className="flex flex-col gap-4 w-full max-w-[380px]">
                    <input
                      type="email"
                      placeholder="Enter your Email"
                      className="custom-input w-full px-6 py-4 rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none text-lg placeholder:text-gray-400"
                    />
                    <button className="btn custom-btn1 flex items-center justify-center w-full">
                      Learn More
                      <img src={btnArrow} className="w-4 h-4 ml-2" alt="Arrow icon" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer Content */}
          <div className="py-12 px-4 md:px-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Columna izquierda - Logo y descripción */}
                <div className="text-center md:text-left">
                  <a href="#" className="footer-logo mb-3">
                    FrostQuest
                  </a>
                  <p className="text-gray-500 leading-relaxed">
                    Go on a journey of unparalleled adventure with our travel agency, where every detail is curated to perfection, ensuring you not only explore the world but also create cherished memories.
                  </p>

                  {/* Redes sociales */}
                  <ul className="flex justify-center md:justify-start gap-4 list-none mt-6">
                    <li>
                      <a href="#" className="icon-link">
                        <i className="ri-facebook-circle-fill text-2xl text-btn-dark hover:text-primary transition-all duration-300 hover:scale-110"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-link">
                        <i className="ri-youtube-fill text-2xl text-btn-dark hover:text-primary transition-all duration-300 hover:scale-110"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-link">
                        <i className="ri-instagram-fill text-2xl text-btn-dark hover:text-primary transition-all duration-300 hover:scale-110"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-link">
                        <i className="ri-linkedin-box-fill text-2xl text-btn-dark hover:text-primary transition-all duration-300 hover:scale-110"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Columna derecha - Links */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 md:mt-12 text-center md:text-left">

                  {/* Columna 1 */}
                  <div>
                    <ul className="footer-links list-none text-center md:text-left">
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          About
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Services
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Login
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Flights
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Columna 2 */}
                  <div>
                    <ul className="footer-links list-none text-center md:text-left">
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Booking
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          FAQ
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Hotels
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Teams
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Columna 3 */}
                  <div>
                    <ul className="footer-links list-none text-center md:text-left">
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Terms & Use
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Sitemap
                        </a>
                      </li>
                      <li className="mb-3">
                        <a href="#" className="text-gray-600 text-base inline-block transition-all duration-300 hover:text-primary hover:translate-x-1">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* Footer Bottom - Copyright */}
          <div className="footer-bottom py-3 px-4 bg-gray-800">
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-white text-lg m-0">
                © 2026 FrostQuest. All rights reserved.
              </p>
            </div>
          </div>

        </div>

        {/* Columna derecha - Imagen fija en todo el alto */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/4 relative">
          <img
            src={footer}
            alt="Traveler overlooking a cliff at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </footer>

    </>
  )
}

export default Index