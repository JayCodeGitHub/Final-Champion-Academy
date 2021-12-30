import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import { Link } from "gatsby"

import PropTypes from "prop-types"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper"

import "../../index.css"

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation])

function Slider({
  titleone,
  descriptionone,
  photoone,
  buttonone,
  hrefone,
  titletwo,
  descriptiontwo,
  phototwo,
  buttontwo,
  hreftwo,
  titlethree,
  descriptionthree,
  photothree,
  buttonthree,
  hrefthree,
}) {
  return (
    <>
      <div className="h-screen bg-gray-900">
        <Swiper
          spaceBetween={30}
          centeredSlides
          loop
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation
          className="mySwipe"
        >
          <SwiperSlide>
            <div className="h-screen w-full relative overflow-hidden bg-gray-900">
              <img
                className="h-full object-cover lg:w-full lg:h-auto opacity-30"
                src={photoone}
                alt={titleone}
              />
              <div className="absolute top-0 text-white lg:w-1/3 w-full h-full lg:pt-40 pt-28 lg:ml-32 px-16 lg:px-0">
                <h1 className="w-full text-5xl py-8 pl-4 text-primary">
                  {titleone}
                </h1>
                <h2 className="w-full lg:text-xl text-lg py-8 text-gray-300">
                  {descriptionone}
                </h2>
                <Link to={hrefone}>
                  <button
                    type="submit"
                    className="rounded-xl border-2 px-8 py-4 m-0 my-8 ml-4 text-primary border-primary"
                  >
                    {buttonone}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen w-full relative overflow-hidden bg-gray-900">
              <img
                className="h-full object-cover lg:w-full lg:h-auto opacity-30"
                src={phototwo}
                alt={titletwo}
              />
              <div className="absolute top-0 text-white lg:w-1/3 w-full h-full lg:pt-40 pt-28 lg:ml-32 px-16 lg:px-0">
                <h1 className="w-full text-5xl py-8 pl-4 text-primary">
                  {titletwo}
                </h1>
                <h2 className="w-full lg:text-xl text-lg py-8 text-gray-300">
                  {descriptiontwo}
                </h2>
                <Link to={hreftwo}>
                  <button
                    type="submit"
                    className="rounded-xl border-2 px-8 py-4 m-0 my-8 ml-4 text-primary border-primary"
                  >
                    {buttontwo}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-screen w-full relative overflow-hidden bg-gray-900">
              <img
                className="h-full object-cover lg:w-full lg:h-auto opacity-30"
                src={photothree}
                alt={titlethree}
              />
              <div className="absolute top-0 text-white lg:w-1/3 w-full h-full lg:pt-40 pt-28 lg:ml-32 px-16 lg:px-0">
                <h1 className="w-full text-5xl py-8 pl-4 text-primary">
                  {titlethree}
                </h1>
                <h2 className="w-full lg:text-xl text-lg py-8 text-gray-300">
                  {descriptionthree}
                </h2>
                <Link to={hrefthree}>
                  <button
                    type="submit"
                    className="rounded-xl border-2 px-8 py-4 m-0 my-8 ml-4 text-primary border-primary"
                  >
                    {buttonthree}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

Slider.propTypes = {
  titleone: PropTypes.element.isRequired,
  descriptionone: PropTypes.element.isRequired,
  photoone: PropTypes.element.isRequired,
  buttonone: PropTypes.element.isRequired,
  hrefone: PropTypes.element.isRequired,
  titletwo: PropTypes.element.isRequired,
  descriptiontwo: PropTypes.element.isRequired,
  phototwo: PropTypes.element.isRequired,
  buttontwo: PropTypes.element.isRequired,
  hreftwo: PropTypes.element.isRequired,
  titlethree: PropTypes.element.isRequired,
  descriptionthree: PropTypes.element.isRequired,
  photothree: PropTypes.element.isRequired,
  buttonthree: PropTypes.element.isRequired,
  hrefthree: PropTypes.element.isRequired,
}

export default Slider
