
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

const Index = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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

            <h2 className='font-urbanist text-5xl font-bold text-dark'>Top Destinations</h2>

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
    </>
  )
}

export default Index