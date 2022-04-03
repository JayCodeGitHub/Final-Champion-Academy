import React from "react"
import PropTypes from "prop-types"

const Paragraph = ({ paragraph }) => (
  <>
    <div className="text-gray-400 lg:px-44 px-4 py-9 lg:py-14 text-lg lg:text-xl">
      {paragraph}
    </div>
  </>
)

Paragraph.propTypes = {
  paragraph: PropTypes.element.isRequired,
}

export default Paragraph
