import React from "react"
import SEO from "../components/seo"
import styled from "styled-components"
import Header from "./../components/Header"
import Hero from "./../components/Hero"
import Story from "./../components/Story"
import Menu from "./../components/Menu"
import Gallery from "./../components/Gallery"
import Order from "./../components/Order"
import Footer from "./../components/Footer"
import "../styles/global.scss"

const Container = styled.div``

const IndexPage = () => {
  return (
    <Container>
      <SEO title="Tres Chaves Resturant" description="Tres Chaves Resturant" />
      <Header />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Order />
      <Footer />
    </Container>
  )
}

export default IndexPage
