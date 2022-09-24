import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
const Header = ({ title, description, button, photo, href }) => (
  <>
    <div className="2xl:px-44 w-full h-auto text-white lg:flex lg:justify-center lg:items-center">
      <div className="lg:w-1/2 w-full lg:h-full lg:p-0 pt-8">
        <div className="w-full h-1/5 pl-24 flex items-center text-3xl">
          {title}
        </div>
        <div className="w-full h-3/5 flex justify-center pt-8 px-10 xl:text-xl text-lg text-gray-400 lg:indent-10 indent-5">
          {description}
        </div>
        {button.length ? (
          <div className="h-1/5 w-full flex justify-center items-center py-9">
            <Link to={href}>
              <button
                type="submit"
                className="rounded-xl border-2 text-primary border-primary px-8 py-4 m-0"
              >
                {button}
              </button>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="lg:w-1/2 w-full flex items-center justify-center 2xl:px-24 xl:px-12 px-4 lg:py-32 py-8">
        <img
          className="rounded-2xl border-2 border-primary"
          src={photo}
          alt={title}
        />
      </div>
    </div>
  </>
)

Header.propTypes = {
  title: PropTypes.element.isRequired,
  description: PropTypes.element.isRequired,
  button: PropTypes.element.isRequired,
  photo: PropTypes.element.isRequired,
  href: PropTypes.element.isRequired,
}

export default Header
