import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import "../index.css"

const Wrapper = styled.div`
  min-height: 90vh;
  background-color: rgb(45, 45, 45);
  padding-top: 7rem;
  color: white;
`
const NavigationWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 100;
`

const PageLayout = ({ children }) => (
  <>
    <NavigationWrapper>
      <Navigation />
    </NavigationWrapper>
    <Wrapper>{children}</Wrapper>
    <Footer />
  </>
)

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default PageLayout
