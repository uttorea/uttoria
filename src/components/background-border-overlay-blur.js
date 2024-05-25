// Import React, Swiper React components, and Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Custom CSS
import './background-border-overlay-blur.css';

export default function BackgroundBorderOverlayBlur() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }} // Enable pagination
        modules={[EffectCoverflow, Pagination, Navigation]} // Include the necessary modules
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
        <SwiperSlide>
          <img alt='#' src='/drone 1.png'/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
