import React, { useState } from "react"
import Popup from "../components/Popup"
import styled from "styled-components"

const Container = styled.div`
  padding: 7em 10px;
  margin: auto;
  width: 100%;
  background: #171c22;
  color: #fff;
  h2 {
    font-size: 40px;
    line-height: 1.25;
    font-family: "cormorant garamond", serif;
    font-weight: 700;
    color: #fff;
    font-style: normal;
    letter-spacing: 10px;
    text-transform: uppercase;
    text-align: center;
    max-width: 360px;
    margin: auto;
    margin-bottom: 1em;
  }
  .email-form {
    text-align: center;
    max-width: 600px;
    padding: 5px;
    margin: auto;
    .inputs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 1em;
    }
    label {
      position: absolute;
      font-size: 1px;
      padding: 0;
      color: #171c22;
    }
    .form-input {
      width: 100%;
      color: #6b6b6b;
      background-color: #ececec;
      resize: none;
      border-radius: 3px;
      font-size: 14px;
      box-sizing: border-box;
      padding: 0.5em;
      border: none;
      height: 46px;
      font-weight: 500;
    }
    .form-input::-webkit-input-placeholder {
      color: #6b6b6b;
    }
    #order {
      grid-column-start: 1;
      grid-column-end: 3;
      height: 150px;
    }
    .full-width {
      grid-column-start: 1;
      grid-column-end: 3;
    }
    #submit {
      margin: 0;
      box-sizing: border-box;
      background-color: #1e1c1c;
      color: white;
      padding: 13px 20px;
      border-radius: 4px;
      font-size: 15px;
      cursor: pointer;
      margin-top: 40px;
      font-weight: 500;
      border: none;
      font-family: "Roboto", sans-serif;
      display: inline-block;
      color: #222;
      background: #d4cba5;
      transition: all 0.4s;
      &:hover {
        filter: brightness(80%);
      }
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    margin-top: 3em;
  }
  .icon {
    width: 64px;
    height: 64px;
    margin: 0em 0.5em;
    margin-bottom: 1.5em;
    cursor: pointer;
    transition: all 0.5s;
  }
  #icon-3 {
    width: 60px;
    height: 60px;
  }
  @media only screen and (max-width: 1035px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px !important;
    }
  }
  @media only screen and (max-width: 500px) {
    #phone {
      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 3;
    }
    #name {
      grid-column-start: 1;
      grid-column-end: 3;
    }
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

function Contact() {
  const [contact, setState] = useState({
    name: "",
    phone: "",
    address: "",
    order: "",
  })
  const [popupState, setPopup] = useState("walo")

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "order", ...contact }),
    })
      .then(() => {
        setPopup("sucess")
      })
      .catch(() => {
        setPopup("error")
      })

    e.preventDefault()
  }
  return (
    <Container id="order">
      <h2>Order Now</h2>
      <div className="icons">
        <a
          href="https://www.ubereats.com/nyc-suburbs/food-delivery/tres-chaves-restaurant/7-fVRfCpRneR-HjRb14o9g"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={require("../images/2.png")} className="icon" />
        </a>
        <a
          href="https://www.doordash.com/merchant/summary?store_id=117761"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={require("../images/3.png")} className="icon" />
        </a>
        <a
          href="https://www.grubhub.com/restaurant/tres-chaves-restaurant-44-orchard-st-yonkers/2062606"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <img src={require("../images/1.png")} className="icon" id="icon-3" />
        </a>
      </div>
    </Container>
  )
}

export default Contact
