import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Hamburger from "./Hamburger"
import SideBar from "./SideBar"

const Container = styled.div`
  .header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: transparent;
    height: 80px;
    position: fixed;
    z-index: 2;
    width: 100%;
  }
  span {
    line-height: 24px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    padding: 18px 20px;
    letter-spacing: 0.6px;
    color: #ffffff;
    transition: all 0.4s;
    &:hover {
      color: #d4cba5;
    }
  }
  .active-link {
    span {
      color: #d4cba5;
    }
  }
  .sticky-header {
    background: #19191a;
    animation: animate 0.8s ease;
    .header-link {
      color: #fff;
      &:hover {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }
  @keyframes animate {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  .hamburger {
    display: none;
    margin-right: 2em;
    margin-top: 2px;
  }
  @media only screen and (max-width: 540px) {
    .nav-link {
      display: none;
    }
    .hamburger {
      display: block;
    }
    .link-wrp-2 {
      width: 24px;
    }
  }
`
const Header = () => {
  const [SideBarIsActive, toggleSideBar] = useState(false)
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "crest.png" }) {
        childImageSharp {
          fixed(width: 60, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  useEffect(() => {
    window.onscroll = function() {
      myFunction()
    }
    var header = document.querySelector(".header-wrapper")
    function myFunction() {
      console.log("dd")
      if (window.pageYOffset > 20) {
        header.classList.add("sticky-header")
      } else {
        header.classList.remove("sticky-header")
      }
    }
  })
  return (
    <Container>
      <div className="header-wrapper">
        <div className="link-wrp">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="logo" />
          </Link>
        </div>
        <div className="link-wrp link-wrp-2">
          <span
            className="nav-link"
            onClick={() => {
              document.querySelector("#hero").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Welcome
          </span>
          <span
            className="nav-link"
            onClick={() => {
              document.querySelector("#story").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Story
          </span>
          <span
            className="nav-link"
            onClick={() => {
              document.querySelector("#menu").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Menu
          </span>
          <span
            className="nav-link"
            onClick={() => {
              document.querySelector("#gallery").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Gallery
          </span>
          <span
            className="nav-link"
            onClick={() => {
              document.querySelector("#order").scrollIntoView({
                behavior: "smooth",
                block: "start",
              })
            }}
          >
            Order
          </span>
          <span
            className="nav-link"
            className="hamburger"
            onClick={() => toggleSideBar(!SideBarIsActive)}
          >
            <Hamburger />
          </span>
        </div>
      </div>
      <SideBar
        SideBarIsActive={SideBarIsActive}
        toggleSideBar={toggleSideBar}
      />
          <!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '614858329126041');
  fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=614858329126041&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->
    </Container>
  )
}

export default Header
