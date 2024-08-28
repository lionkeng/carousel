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
    {
      id: 1,
      name: 'Aspen',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/shepard-fp1base_d254287ecd5c4fcd.png',
    },
    {
      id: 2,
      name: 'Oakridge',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/mendenhall-fp1base%20(demo)_85d23fe9cde8f03e.jpg',
    },
    {
      id: 3,
      name: 'Sycamore',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/oxford-a-fp1base_aae1661cb814f25f.png',
    },
    {
      id: 4,
      name: 'Hamilton',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/hamilton-a-fp1base_25485aecaf3d3cf7.jpg',
    },
    {
      id: 5,
      name: 'Magnolia',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/kamber-a-fp1base_8bf4d4eef2aab73e.png',
    },
    {
      id: 6,
      name: 'Dogwood',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/dogwood-a-fp1base_bb47b18bf9131112.png',
    },
    {
      id: 7,
      name: 'Cypress',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/garrison-a-fp1base_a2110e3170894878.jpg',
    },
    {
      id: 8,
      name: 'Juniper',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/blueridge-a-fp1base_b91e780546242757_d1d4e4af57f4ccc5.jpeg',
    },
    {
      id: 9,
      name: 'Cooper',
      image:
        'https://cdn.anewgo.com/app/demo/images/floorplans/cooper-fp1base_624adb3af1e3e695.jpg',
    },
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
          <SwiperSlide key={i}>
            <div className="carousel-slide">
              <span className="carousel-slide-title">{img.name}</span>
              <div className="carousel-slide-image-container">
                <img src={img.image} alt={img.name} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
