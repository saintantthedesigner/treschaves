import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 5em auto;
  background: #171c22;
  padding: 5em 10px 7em 10px;
  h1 {
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
    margin-bottom: 0.5em;
  }
  h4 {
    font-size: 30px;
    line-height: 1.4;
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    color: #fff;
    font-style: italic;
    margin-bottom: 2.5em;
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
  .menu {
    max-width: 1250px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 1em 2em;
  }
  .menu-item {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px dashed #4a4d56;
    padding-bottom: 1.5em;
  }
  h6 {
    font-size: 22px;
    line-height: 1.4;
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 0;
    color: #fff;
  }
  p {
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    letter-spacing: normal;
    color: #838893;
    font-size: 18px;
    font-style: italic;
    line-height: 23px;
    text-align: left;
    box-sizing: border-box;
  }
  h5 {
    font-family: "cormorant garamond", serif;
    font-weight: 400;
    letter-spacing: normal;
    text-align: left;
    box-sizing: border-box;
    color: #d4cba5;
    float: right;
    font-style: normal;
    font-size: 42px;
    line-height: 38px;
    margin: 0 0 0 20px;
  }
  @media only screen and (max-width: 740px) {
    margin: 7em auto 7em auto;
    h1 {
      font-size: 32px;
    }
    h4 {
      font-size: 24px;
    }
    .menu {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
  }
`

const Menu = () => {
  return (
    <Container>
      <div className="text" id="menu">
        <h1>DISCOVER OUR MENU</h1>
        <h4>Offering a variety of delicious choices</h4>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Whole Grilled Chicken</h6>
            <p>Charcoal Grilled Chicken (Bone in)</p>
          </div>
          <h5>$14</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Pork & Clams for Two</h6>
            <p>Pork Cubes Stir-Fried w/ clams and Fried Cube Potatoes</p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Pork & Clams for Two</h6>
            <p>Pork Cubes Stir-Fried w/ clams and Fried Cube Potatoes</p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Pork & Clams for Two</h6>
            <p>Pork Cubes Stir-Fried w/ clams and Fried Cube Potatoes</p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Pork & Clams for Two</h6>
            <p>Pork Cubes Stir-Fried w/ clams and Fried Cube Potatoes</p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Grilled Portuguese Sausage</h6>
            <p>Smoked Grilled Portuguese Sausage</p>
          </div>
          <h5>$16</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Whole Chicken in Garlic Sauce</h6>
            <p>Pan Fried Chicken (Bone in) in Garlic Sauce</p>
          </div>
          <h5>$14</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Steak with Shrimp, Clams & Mussels</h6>
            <p>
              Grilled Shell Steak w/ Shrimp, Clams & Mussels in a Light Tomato &
              Garlic Sauce.
            </p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Shrimp in Garlic Sauce</h6>
            <p>Baby Shrimp Saute in a Garlic Sauce</p>
          </div>
          <h5>$16</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Clams in Garlic Sauce</h6>
            <p>Clams in a Garlic and White Wine Sauce w/ Cilantro</p>
          </div>
          <h5>$16</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Whole Chicken in Garlic Sauce</h6>
            <p>Pan Fried Chicken (Bone in) in Garlic Sauce</p>
          </div>
          <h5>$14</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Grilled Shell Steak</h6>
            <p>Grilled Juice Shell Steak Cooked at Your Taste</p>
          </div>
          <h5>$21</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Paelha</h6>
            <p>Seafood combination in yellow rice for two</p>
          </div>
          <h5>$40</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Mariscada</h6>
            <p>Seafood combination in tomato sauce for two.</p>
          </div>
          <h5>$40</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Grilled Codfish</h6>
            <p>With potatoes, onions, and peppers in olive oil.</p>
          </div>
          <h5>$22.5</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Steak with Shrimp, Clams & Mussels</h6>
            <p>
              Grilled Shell Steak w/ Shrimp, Clams & Mussels in a Light Tomato &
              Garlic Sauce.
            </p>
          </div>
          <h5>$25</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Chicken & Ribs for 2</h6>
            <p>
              Charcoal Grilled Chicken and Ribs for 2. Served with rice, fries,
              and salad
            </p>
          </div>
          <h5>$20</h5>
        </div>
        <div className="menu-item">
          <div className="menu-item-inside">
            <h6>Chicken & Ribs for 4</h6>
            <p>
              Charcoal Grilled Chicken and Ribs for 4. Served with rice, fries,
              and salad.
            </p>
          </div>
          <h5>$38</h5>
        </div>
      </div>
    </Container>
  )
}

export default Menu
