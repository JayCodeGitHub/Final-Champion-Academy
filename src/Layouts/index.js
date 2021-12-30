import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../assets/styles/GlobalStyle"
import SEO from "../components/seo/SEO"
import { theme } from "../assets/styles/theme"
import "../index.css"

const MainLayout = ({ children }) => (
  <>
    <div>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  </>
)

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
}

export default MainLayout
