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
import floorplans from '../../assets/floorplans'

export default function Carousel(): JSX.Element {
  // if you want to use array
  const slide_img = floorplans
  return (
    <div className={'swiper-container'}>
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
        className={'carousel'}
      >
        {slide_img.map((img, i) => (
          <SwiperSlide key={i}>
            <div className={'carousel-slide'}>
              <span className={'carousel-slide-title'}>{img.name}</span>
              <div className={'carousel-slide-image-container'}>
                <img src={img.image} alt={img.name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
