import React from "react"
import PropTypes from "prop-types"

const PhotoTitle = ({ title, photo }) => (
  <>
    <div className="w-full lg:h-60 h-32 relative bg-gray-900">
      <h1 className="w-full h-full lg:text-5xl text-2xl text-center text-white absolute flex items-center justify-center">
        {title}
      </h1>
      <img
        className="w-full h-full object-cover opacity-30"
        src={photo}
        alt={title}
      />
    </div>
  </>
)

PhotoTitle.propTypes = {
  title: PropTypes.element.isRequired,
  photo: PropTypes.element.isRequired,
}

export default PhotoTitle
