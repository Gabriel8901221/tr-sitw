import { useRef } from "react";
import "./Services.css";


const Services = () => {


  
  const slider = useRef()
  let tx = 0

  const slideForward = () => {
    if (tx > -41) {
      tx -= 30
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () => {
    if (tx < 0) {
      tx += 30
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }


  return (
    <div className="services">
      <h2>Our</h2>
      <h1>Services</h1>
      <div className="s-container">
        <div className="s-slider" ref={slider}>
          <div className="slide">
            <img src="./mexico.jpg" alt="" />
            <h3>Mexico</h3>
            <span>$2,300</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>
          <div className="slide">
            <img src="./france.jpg" alt="" />
            <h3>France</h3>
            <span>$3,000</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>
          <div className="slide">
            <img src="./canada.jpg" alt="" />
            <h3>Canada</h3>
            <span>$2,500</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>
          <div className="slide">
            <img src="./spain.jpg" alt="" />
            <h3>Spain</h3>
            <span>$3,300</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>
          <div className="slide">
            <img src="./brazil.jpg" alt="" />
            <h3>Brazil</h3>
            <span>$2,500</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>

          <div className="slide">
            <img src="./japan.jpg" alt="" />
            <h3>Japan</h3>
            <span>$4,300</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>Visit Details</button>
          </div>
        </div>
      </div>
      <div className="s-buttons">
        <button className="prev-btn" onClick={slideBackward}><i class="fa-solid fa-arrow-left"></i></button>
        <button className="next-btn" onClick={slideForward}><i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  );
};

export default Services;

