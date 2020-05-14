import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  margin: 7em auto 0 auto;
  h1 {
    font-size: 40px;
    line-height: 1.25;
    font-family: "cormorant garamond", serif;
    font-weight: 700;
    color: #333;
    font-style: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-align: center;
    max-width: 400px;
    margin-bottom: 0.5em;
  }
  h5 {
    font-size: 30px;
    line-height: 1.4;
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    color: #333;
    font-style: italic;
    margin-bottom: 1.5em;
    text-align: center;
  }
  .text {
    max-width: 700px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .imgs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
  .img-wrp {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 740px) {
    margin: 7em auto 7em auto;
    h1 {
      font-size: 32px;
    }
    h5 {
      font-size: 24px;
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryQuery {
      allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 400, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Container>
      <div className="text" id="gallery">
        <h1>DISCOVER OUR Gallery</h1>
        <h5>Take a look at some of our most popular dishes.</h5>
      </div>
      <div className="imgs">
        {data.allFile.edges.map((node, index) => (
          <div id={`img-${index}`} className="img-wrp">
            <Img
              fluid={node.node.childImageSharp.fluid}
              alt="brand"
              className="img"
              key={node.node.childImageSharp.fluid.src}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default Gallery
