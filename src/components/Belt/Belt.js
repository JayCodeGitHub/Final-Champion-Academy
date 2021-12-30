import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Belt = ({ title, description, button, href }) => (
  <>
    <div className=" w-full h-80 bg-primary xl:px-20">
      <div className="w-full h-1/2">
        <div className="w-full h-1/2 flex justify-center items-center text-black text-3xl">
          {title}
        </div>
        <div className="w-full h-1/2 flex justify-center items-center text-white px-4 md:text-4xl text-center text-2xl">
          {description}
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-center items-center">
        <Link to={href}>
          <button
            type="submit"
            className="rounded-xl border-2 text-white px-8 py-4 m-0"
          >
            {button}
          </button>
        </Link>
      </div>
    </div>
  </>
)

Belt.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
  button: PropTypes.element.isRequired,
  href: PropTypes.element.isRequired,
}

export default Belt
