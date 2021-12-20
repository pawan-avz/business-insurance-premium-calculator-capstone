import React from "react";
import "../css/home.css";
// import Img from "../images/6685.jpg";
import Img from "../images/scc3.png";

import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import { Card } from "./Card";
import Form1 from "./Quote/quotes_component/Form1";
import styled from "styled-components";

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
    <>
     
        <div className="home">
          <div className="image">
            <img src={Img} width="100%" />
          </div>
          <div className="homeIntro">
            <h1>Welcome to Business Insurance Premium Calculator</h1>
            <ul>
              <li>Our policy helps your business bear the cost of liability claims arising from third party body.</li>
              <li>If a business is not sufficiently insured against the property damage, the recovery cost will be entirely on owner.</li>
              <li>
                We help to insure pay off the fixed costs, if the business is unable to operate after disaster.
              </li>
            
            </ul>

            <div className="buttons">
              <button className="readMore btn">Read more</button>
              <button className="readMore btn">Go</button>
            </div>
          </div>
        </div>

        <Form1 />

        {/* plans */}
        <div className="plans">
          <h4>Our Plans</h4>
          <p>
            There are several options available for coverage for businesses The coverage 
            your business requires depends on the things such as the industry, its location, number of employees, and size. 
            It is probable that your insurance needs may change as the business grows.
          </p>
        </div>

        <div className="card_container">
          {arr.map((info) => (
            <>
              <Card cover={info.cover} premium={info.premium} img={info.img} />
            </>
          ))}
        </div>
    

    
    </>
  );
};

export default Home;
