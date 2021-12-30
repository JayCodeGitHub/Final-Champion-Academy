import React from "react"
import PropTypes from "prop-types"

const Photo = ({ photo }) => (
  <>
    <div className=" w-full lg:px-36 px-8 py-8">
      <img className="rounded-3xl border-2 border-primary w-full" src={photo} />
    </div>
  </>
)

Photo.propTypes = {
  photo: PropTypes.element.isRequired,
}

export default Photo
