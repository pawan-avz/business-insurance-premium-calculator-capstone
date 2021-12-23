import React from "react";
import "../css/home.css";
import Img from "../images/14334.png";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import {Link} from "react-router-dom";
import { Card } from "./Card";
import Form1 from "./Quote/quotes_component/Form1";
import styled from "styled-components";

const Button=styled.button`
   background-color:#1c3334;
   color:white;
   padding:10px 25px;
   border-radius:5px;
   border:1px solid #fff;

`;


const Home = () => {
  const arr = [
    {
      cover: "80,000 to 1,00,000",
      premium: 4000,
      img: icon1,
    },
    {
      cover: "50,000 to 80,000",
      premium: 3000,
      img: icon2,
    },
    {
      cover: "25,000 to 50,000",
      premium: 2000,
      img: icon3,
    },
    {
      cover: "10,000 to 25,000",
      premium: 1500,
      img: icon4,
    },
  ];

  return (
    <div style={{backgroundImage: "linear-gradient(to right, lightblue, #376E6F)"}}>
      <div className="home" >
        <div className="image">
          <img src={Img} width="100%" />
        </div>
        <div className="homeIntro">
          <h1>Welcom to Business Insurance Premium Calculator</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Ut interdum magna ac tortor tristique gravida.</li>
            <li>Aenean sit amet purus in dui dictum porta vitae vitae nibh.</li>
            <li>
              Nam vitae felis pulvinar, aliquet ligula sit amet, congue mauris.
            </li>
            <li>Fusce at velit vel velit vestibulum eleifend.</li>
          </ul>

          <div className="text-left ml-5 mt-4">
         <Link to="/about">   <Button>Read more</Button></Link>
           
            {/* <Button >Go</Button> */}
          </div>
        </div>
      </div>

      {/* plans */}
      <div className="plans">
        {/* <h4>Our Plans</h4>
        <p>
          The href attribute requires a valid value to be accessible. Provide a
          valid, navigable address as the href value. If you cannot provide a
          valid href, but still need the element to resemble a link, use a
          button and change it with appropriate styles.
        </p> */}
      </div>

      {/* <div className="card_container">
        {arr.map((info) => (
          <>
            <Card cover={info.cover} premium={info.premium} img={info.img} />
          </>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
