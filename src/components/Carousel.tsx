import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-coverflow'

import './styles.css'

export default function Carousel(): JSX.Element {
  // if you want to use array
  const slide_img = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
  ]
  return (
    <div className="swiper-container">
      {' '}
      {/* Add this wrapper div */}
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} // Change to 'auto' for responsive sizing
        spaceBetween={30} // Add space between slides
        coverflowEffect={{
          rotate: 0,
          stretch: 0, // Reduce stretch to 0
          depth: 300, // Reduce depth for less extreme effect
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        className="carousel"
      >
        {slide_img.map((img, i) => (
          <SwiperSlide key={i} style={{ width: '300px' }}>
            {' '}
            {/* Set a fixed width for slides */}
            <img
              src={img}
              alt=""
              style={{ width: '100%', height: 'auto' }}
            />{' '}
            {/* Ensure images fit slide */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
