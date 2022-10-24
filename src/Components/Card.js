import React from "react";
import Main from "../images/bg-main-desktop.png";
import frontcard from "../images/bg-card-front.png";
import backcard from "../images/bg-card-back.png";

function Card() {
  return (
    <div className="main-div">
      <div className="left-side">
        <img className="main-pic" src={Main} alt="main-ph" />
        <div className="front">
          <img className='frnt-card' src={frontcard} alt='front-card' />

          <div className='card-info'>
          <div className="flex"><div className='white-circle'></div>
            <div className='circle'></div>
            </div>
           
            <div className='card-name'>
              <p className='card-num'>0000  0000  0000  0000</p> <br/>
              <div className="card-bottom">
              <p className='name'> JANE APPLESEED</p> <p className="expiry">00/00</p>
              </div>

            </div>
          </div>
        </div>
        <div className="back">
          <img className="back-card" src={backcard} alt="backcard" />
        </div>
      </div>

      <div className="right-div">
        <form>
          <label className="label-name">CARDHOLDER NAME</label> <br />
          <input
            className="input"
            type="text"
            placeholder="e.g Jane Appleseed"
          />
          <br />
          <label className="label-name">CARD NUMBER</label> <br />
          <input
            className="input" type="text" placeholder="e.g 1234 5678 9123 0000"/>
          <br />
          <label className="label-name"> EXP. DATE (MM/YY) </label>
          <label className="label_cvc"> CVC</label>
          <br />
          <input className="input-same" type="text" placeholder="MM" />
          <input className="input-same" type="text" placeholder="YY" />
          <input className="input-cvc" type="number" placeholder="e.g 123" />
          <br />
          <button className="btn">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Card;
