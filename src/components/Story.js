import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  margin: 7em auto 15em auto;
  padding: 10px;
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
    max-width: 360px;
    margin-bottom: 0.5em;
  }
  h5 {
    font-size: 30px;
    line-height: 1.4;
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    color: #333;
    font-style: italic;
    margin-bottom: 1em;
    text-align: center;
  }
  p {
    font-family: "cormorant garamond", serif;
    color: #171c22;
    font-size: 22px;
    line-height: 33px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 3em;
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
    display: flex;
  }
  .img-wrp {
    width: 100%;
    height: 100%;
    margin: 1em;
    position: relative;
  }
  .img {
    width: 100%;
    height: 100%;
  }
  #img-1 {
    transform: translateY(90px);
  }
  #img-2 {
    transform: translateY(180px);
  }
  #img-3 {
    transform: translateY(90px);
  }
  @media only screen and (max-width: 740px) {
    margin: 7em auto 7em auto;
    h1 {
      font-size: 32px;
    }
    h5 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
    }
    .imgs {
      flex-direction: column;
    }
    .img-wrp {
      margin: 1em 0;
      transform: none !important;
    }
  }
`

const Story = () => {
  const data = useStaticQuery(graphql`
    query storyQuery {
      allFile(filter: { relativeDirectory: { eq: "story" } }) {
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
      <div className="text" id="story">
        <h1>DISCOVER OUR STORY</h1>
        <h5>The perfect place to enjoy great food.</h5>
        <p>
          Our restaurant was founded in 1986, and since then we provide our
          visitors with the best Portuguese and Spanish dishes made
          from the the freshest ingredients, the finest meats, seafood
          and poultry. Do not hesitate to come and enjoy our meals!
    Serving our community for over 30 years.
        </p>
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

export default Story
