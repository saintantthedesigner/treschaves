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
      <form
        name="order"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="email-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="order" />
        <div className="inputs">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="form-input"
            required
            value={contact.name}
            onChange={e => {
              const val = e.target.value
              setState(prevState => {
                return { ...prevState, name: val }
              })
            }}
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="form-input"
            required
            value={contact.phone}
            onChange={e => {
              const val = e.target.value
              setState(prevState => {
                return { ...prevState, phone: val }
              })
            }}
          />
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            className="form-input full-width"
            required
            value={contact.address}
            onChange={e => {
              const val = e.target.value
              setState(prevState => {
                return { ...prevState, address: val }
              })
            }}
          />
          <label htmlFor="order">Order</label>
          <textarea
            type="text"
            name="order"
            id="order"
            className="form-input"
            placeholder="Write your order in here"
            value={contact.order}
            required
            onChange={e => {
              const val = e.target.value
              setState(prevState => {
                return { ...prevState, order: val }
              })
            }}
          />
        </div>
        <button type="submit" id="submit">
          Order Now
        </button>
        <Popup type={popupState} setPopup={setPopup} />
      </form>
    </Container>
  )
}

export default Contact
