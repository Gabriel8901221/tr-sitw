import React, { useEffect, useState } from "react";
import "./HeaderTr.css";

const HeaderTr = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className={`header ${sticky ? "dark-nav" : ""}`}>
      <div className="h-container">
        <div className="h-logo">
          <i class="fa-solid fa-earth-americas"></i>
          <h1>Tr</h1>
        </div>
        <div className="h-infos">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Testimonials</li>
            <button>Contact</button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTr;
