import React from "react"
import styled from "styled-components"
// import { useStaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(${require("../images/bg.jpg")});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Cormorant Garamond";
  position: relative;
  padding: 100px 0;

  h1 {
    font-family: "Cormorant Garamond";
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    margin: 1em auto 10em auto;
  }
  h2 {
    color: #fff;
    font-size: 84px;
    font-style: italic;
    font-weight: 900;
    text-align: center;
    margin: 3em auto 0 auto;
    font-family: "Alegreya";
  }
  h6 {
    font-family: "Cormorant Garamond";
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.65em;
    margin-top: 0.75em;
    letter-spacing: 5px;
    color: #d4cba5;
  }
  p {
    font-family: "Cormorant Garamond";
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 1em;
  }
  .flex-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .icons {
    display: flex;
    justify-content: center;
  }
  .icon {
    width: 36px;
    height: 36px;
    margin: 0em 0.5em;
    margin-bottom: 1.5em;
    filter: grayscale(100%);
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      filter: grayscale(0%);
    }
  }
  @media only screen and (max-width: 813px) {
    h1 {
      margin: 1em auto 6em auto;
    }
    h2 {
      margin: 1.25em auto 0 auto;
    }
  }
  @media only screen and (max-width: 740px) {
    h2 {
      font-size: 48px;
    }
    p {
      font-size: 18px;
    }
    .btn {
      font-size: 14px;
    }
    .hero-img {
      width: 260px;
      height: 260px;
    }
  }
`

const Hero = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "logo.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1000, maxHeight: 1000) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <Container id="hero">
      {/* <Img
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
        className="hero-img"
      /> */}
      <h2>Tres Chaves Resturant</h2>
      <h1>The perfect place to enjoy great food and great people.</h1>
      <div className="flex-container">
        <div className="flex-item">
          <h6>ADDRESS</h6>
          <p>44 Orchard St Yonkers, NY 10703</p>
        </div>
        <div className="flex-item ">
          <h6>BOOK ONLINE</h6>
          <p>Call: 914-969-9128 or 914-969-1458</p>
          <div className="icons">
            <a
              href="https://www.grubhub.com/restaurant/tres-chaves-restaurant-44-orchard-st-yonkers/2062606"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src={require("../images/1.png")} className="icon" />
            </a>
            <a
              href="https://www.ubereats.com/nyc-suburbs/food-delivery/tres-chaves-restaurant/7-fVRfCpRneR-HjRb14o9g"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src={require("../images/2.png")} className="icon" />
            </a>
            <a
              href="https://www.doordash.com/store/tres-chaves-restaurant-yonkers-117761/en-US"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <img src={require("../images/3.png")} className="icon" />
            </a>
          </div>
        </div>
        <div className="flex-item">
          <h6>OPENING HOURS</h6>
          <p>11:30 Am - 8:00 Pm</p>
        </div>
      </div>
    </Container>
  )
}

export default Hero
