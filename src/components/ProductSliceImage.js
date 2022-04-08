import React, { useState } from 'react'
import { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import './productSliceImage.scss'
import PropTypes from 'prop-types'

const ProductImagesSlider = (props) => {
  const [activeThumb, setActiveThumb] = useState()
  console.log(props.images)
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{ swiper: activeThumb }}
        className="product-images-slider">
        {props.images.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setActiveThumb}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-images-slider-thumbs">
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="product-images-slider-thumbs-wrapper">
              <img src={item} alt="product images" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

ProductImagesSlider.propTypes = {
  images: PropTypes.array.isRequired
}

export default ProductImagesSlider
