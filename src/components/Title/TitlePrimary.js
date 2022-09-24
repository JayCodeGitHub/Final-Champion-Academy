import React from "react"
import PropTypes from "prop-types"

const Title = ({ title }) => (
  <>
    <h1 className=" w-full flex justify-center  lg:pl-0 items-center text-primary py-9 lg:text-3xl text-2xl">
      {title}
    </h1>
  </>
)

Title.propTypes = {
  title: PropTypes.element.isRequired,
}

export default Title
