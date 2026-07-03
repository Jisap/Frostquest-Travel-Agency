
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Navigation, EffectFade, Autoplay } from 'swiper/modules';
import btnArrow from "./../../assets/btn-arrow.svg"
import plane from "../../assets/plane.svg"

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
      <div className='destinations py-5 my-15'>
        <div className='section-title'>
          <div className='text-center flex flex-col justify-center items-center gap-3'>
            <span className='flex items-center gap-2'>
              <img src={plane} className='img-fluid' alt="" />
              <span>Travel destination</span>
              <img src={plane} className='img-fluid' alt="" />
            </span>
            <h2>Top Destinations</h2>
            <p>Explore our top destinations voted by more than 100,000+ customers around the world</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index