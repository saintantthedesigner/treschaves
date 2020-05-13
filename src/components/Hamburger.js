import React from "react"
import styled from "styled-components"
const Container = styled.div`
  b {
    height: 3px;
    width: 25px;
    background: ${props => (props.color ? props.color : "#fff")};
    border-radius: 4px;
    margin-bottom: 4px;
    display: block;
  }
`

const Hamburger = ({ color }) => {
  return (
    <Container color={color}>
      <b></b>
      <b></b>
      <b></b>
    </Container>
  )
}

export default Hamburger
