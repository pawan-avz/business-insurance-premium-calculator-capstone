import React from "react";
import '../css/card.css'
export const Card = (props) => {
  return (
    <div >
        <div className="card">
            <h6>get <span>${props.cover}</span> cover</h6>
            <div className="img">
              <img src={props.img}/>
            </div>
            <h4>@ ${props.premium}/Yr</h4>
            <p>protection against "Fire" and "Theft"</p>
            <button className="btn">Buy now</button>
        </div>
        
      
    </div>
  );
};
