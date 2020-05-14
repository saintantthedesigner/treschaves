import React from "react"
import styled from "styled-components"
const Container = styled.div`
  padding: 25px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  background: #19191a;
  width: 100%;
  max-width: 1920px;
  margin: auto;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  .site-foot-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }
  .site-foot-nav-right a:last-child {
    padding-right: 0;
  }
  .site-foot-nav div {
    margin: 0em 0.5em;
  }
  .name {
    color: #d4cba5;
    font-weight: 500;
  }
  .footer-item {
    padding: 10px 0;
  }
  a {
    margin: 0 0.5em;
  }
  @media only screen and (max-width: 312px) {
    .site-foot-nav {
      justify-content: center;
    }
  }
`
function Footer() {
  return (
    <Container>
      <div className="site-foot-nav container">
        <div className="site-foot-nav-left footer-item">
          © 2020 <span className="name">TresChaves</span>. All rights reserved
        </div>
        <div className="footer-item">
          Developed By <span className="name">CHAVESBROSSTUDIOS</span>
        </div>
      </div>
    </Container>
  )
}

export default Footer
