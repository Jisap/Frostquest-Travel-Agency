
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, EffectFade, Autoplay } from 'swiper/modules';

import btnArrow from "./../../assets/btn-arrow.svg"

const Index = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        effect={'fade'}
        navigation={{
          prevEl: '.swiper-prev',
          nextEl: '.swiper-next',
        }}
        className='overflow-hidden'
      >
        <SwiperSlide>
          <div className='hero hero1 d-flex flex-column justify-content-center align-items-center'>
            <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
              <h2 className='text-white'>
                THE KINGDOM OF ICE
              </h2>

              <h1 className='text-white'>
                Green Lan
              </h1>

              <button className='btn text-white hero-btn mt-5'>
                LEARN MORE <img src={btnArrow} className='img-fluid' alt='btn' />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero hero2 d-flex flex-column justify-content-center align-items-center'>
            <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
              <h2 className='text-white'>
                THE KINGDOM OF ICE
              </h2>

              <h1 className='text-white'>
                Green Lan
              </h1>

              <button className='btn text-white hero-btn mt-5'>
                LEARN MORE <img src={btnArrow} className='img-fluid' alt='btn' />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='hero hero3 d-flex flex-column justify-content-center align-items-center'>
            <div className='hero-content w-100 d-flex flex-column justify-content-center align-items-center'>
              <h2 className='text-white'>
                THE KINGDOM OF ICE
              </h2>

              <h1 className='text-white'>
                Green Lan
              </h1>

              <button className='btn text-white hero-btn mt-5 '>
                LEARN MORE <img src={btnArrow} className='img-fluid' alt='btn' />
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Index