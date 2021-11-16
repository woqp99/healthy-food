
import './App.css';
import ReactDOM from "react-dom";
import useScroll from "./useScroll";
import React, { useEffect, useRef, useState } from "react";

function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}

function handleScroll() {
  const elems = document.querySelectorAll('.tran');
  const elems_x = document.querySelectorAll('.tran-x');
  elems.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateY(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateY(0px)';
    }
  })

  elems_x.forEach(elem => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = 'translateX(70px)';
    } else {
      elem.style.opacity = "1";
      elem.style.transform = 'translateX(0px)';
    }
  })

}

window.addEventListener('scroll', handleScroll);

function App() {
  const { y } = useScroll();
  console.log(y);
  return (
    <div className="App">

      <div className="main">
        <div className="header">
          <header>
            <h2>Healthy</h2>
            <nav>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Menu</a></li>
                <li><a href="#">Promo</a></li>
                <li><a href="#">Order</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <div className="thumb tran" >
          <h1>Healthy Food <br/> Restaurant</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer<br/> adipiscing elit.</p>
        </div>
      </div>

      <div className="wave wave-top"><img></img></div>

      <div className="sub">
        <p className="p-title tran">POPULAR MENU</p>
        <div className="p-menu">

          <div className="p-list">

            <div className="p-first tran">
              <img></img>
              <p className="name">Noodles</p>
              <p className="exp">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
              <p className="price">$13</p>
            </div>

            <div className="p-first tran">
              <img src="/static/media/noodles1.6e05ac24.png" ></img>
              <p className="name">Noodles</p>
              <p className="exp">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
              <p className="price">$13</p>
            </div>
 
            <div className="p-first tran">
              <img src="/static/media/noodles1.6e05ac24.png" ></img>
              <p className="name">Noodles</p>
              <p className="exp">Lorem ipsum dolor sit amet, consectetur  adipisicing...</p>
              <p className="price">$13</p>
            </div>

          </div>

          <div className="morebtn s-more">
            <button className="s-more more tran">SHOW MORE</button>
          </div>
        </div>

      <div>
        <div className="event1">
          <div className="event-img">
            <img></img>
          </div>
          <div className="event-cont tran" >
            <h2>Discount up to <br/>50% All Menu</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <div className="morebtn r-more">
              <button className=" more">READ MORE</button>
            </div>
          </div>

        </div>

        <div className="event1">
          <div className="event-cont tran" >
            <h2>January’s <br/>Promo: Buy 1 <br/>Get 1 Free!</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <div className="morebtn r-more">
              <button className=" more">READ MORE</button>
            </div>
          </div>
          <div className="event-img">
            <img></img>
          </div>
        </div>
        </div>
        <div className="howto">
          <h2 className="tran">HOW TO ORDER</h2>
          <div className="order">
            <div className="order-cont tran-x">
              <h2>01</h2>
              <h3>Order</h3>
              <p>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.</p>
            </div>

            <div className="order-cont tran-x">
              <h2>02</h2>
              <h3>Choose Menu</h3>
              <p>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.</p>
            </div>

            <div className="order-cont tran-x">
              <h2>03</h2>
              <h3>Delivery</h3>
              <p>Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit, tation omne  ullamco laboris nisi ut aliqolore.</p>
            </div>
          </div>

        </div>

        <div className="free-d">
            <h1 className="tran">Free Delivery</h1>
            <p className="tran">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            <div className="morebtn r-more s-more">
              <button className="tran more">GET VOUCHER</button>
            </div>
        </div>

        <div className="wise">
          <h1 className="tran">“</h1>
          <h2  className="tran">Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br/>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis </h2>
          <h2  className="tran">Agus Waiters</h2>
          <div className="sns tran">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>
        <div className="wave wave-bottom"><img></img></div>
      </div>

      <footer>
        <div className="footer">
          <h3>ABOUT</h3>
          <p>Lorem ipsum dolor sit amet, consec
            tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</p>
        </div>

        <div className="footer">
          <h3>ABOUT</h3>
          <p>Team</p>
          <p>Join us</p>
          <p>Ehic</p>
          <p>Goals</p>
        </div>

        <div className="footer">
          <h3>ABOUT</h3>
          <p>Team</p>
          <p>Join us</p>
          <p>Ehic</p>
          <p>Goals</p>
        </div>

      </footer>
    </div>
  );
}

export default App;
