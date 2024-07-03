import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="home">
      <div className="home-container">
        <h3>Welcome,</h3>
        <h2>Explore The World.</h2>
        <motion.div
          className="h-animation"
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
        >
          <TypeAnimation
            sequence={[
              "Visit Mexico.",
              2000,
              "Visit France.",
              2000,
              "Visit Canada.",
              2000,
              "Visit Spain.",
              2000,
              "Visit Brazil.",
              2000,
              "Visit Japan.",
              2000,
            ]}
            speed={50}
            className="info"
            wrapper="span"
            repeat={0}
          />
        </motion.div>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
          voluptas cumque, tenetur facere possimus quia ipsam, obcaecati aliquid
          voluptatem quas molestias fugiat exercitationem consequatur laboriosam
          vel voluptatibus velit minima recusandae!
        </p>

        <div className="buttons">
          <button>Contact</button>
          <a className="btn-serve">Services</a>
        </div>
      </div>
    </section>
  );
};

export default Home;
