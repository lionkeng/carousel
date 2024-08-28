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
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

export default function Carousel(): JSX.Element {
  const { setSelectedFloorplan } = useContext(AppContext)
  const navigate = useNavigate()
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
        onClick={(swiper) => {
          // we will only respond if the activeIndex and clickedIndex is the same
          if (swiper.clickedIndex === swiper.activeIndex) {
            const floorplan = floorplans[swiper.clickedIndex - 1]
            setSelectedFloorplan(floorplan.id)
            navigate(`/floorplan/${floorplan.id}`)
          }
        }}
        className={'carousel'}
        preventClicks={true}
        preventClicksPropagation={true}
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
