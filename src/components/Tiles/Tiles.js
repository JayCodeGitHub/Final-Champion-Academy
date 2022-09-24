import React from "react"
import PropTypes from "prop-types"

const Tiles = ({ title, description, photoone, phototwo, photothree }) => (
  <>
    <div className=" w-full 2xl:px-44 px-0 ">
      <h2 className=" lg:h-28 h-36 px-4 flex items-center justify-center text-4xl text-primary ">
        {title}
      </h2>
      <div className="lg:h-80 lg:flex lg:justify-between lg:items-center 2xl:px-4 lg:px-16 md:px-32 px-8">
        <div className="2xl:w-96 lg:w-72 w-full flex items-center justify-center">
          <img
            className="w-full rounded-3xl mb-10 lg:m-0"
            src={photoone}
            alt={title}
          />
        </div>
        <div className="2xl:w-96 lg:w-72 w-full flex items-center justify-center">
          <img
            className="w-full rounded-3xl mb-10 lg:m-0"
            src={phototwo}
            alt={title}
          />
        </div>
        <div className="2xl:w-96 lg:w-72 w-full flex items-center justify-center">
          <img
            className="w-full rounded-3xl mb-10 lg:m-0"
            src={photothree}
            alt={title}
          />
        </div>
      </div>
      <p className="lg:indent-10 indent-5 lg:h-80 text-gray-400 text-2xl lg:px-16 px-6 flex justify-center items-center">
        {description}
      </p>
    </div>
  </>
)

Tiles.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
  photoone: PropTypes.element.isRequired,
  phototwo: PropTypes.element.isRequired,
  photothree: PropTypes.element.isRequired,
}

export default Tiles
