import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <>
    <div className="w-11/12 m-auto text-center lg:pl-0 text-white py-9 lg:text-3xl text-2xl">
      {title}
    </div>
  </>
)

Title.propTypes = {
  title: PropTypes.element.isRequired,
}

export default Title
