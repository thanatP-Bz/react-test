import "./hero.scss";
import img1 from "../assets/img/stef.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="text-container">
        <h3>THANAT BENZ</h3>
        <h1>Full Stack Developer and UI Designer</h1>
        <div className="buttons">
          <button>See the Lastest Works</button>
          <button>Contact Me</button>
        </div>
      </div>
      <div className="img-container">
        <img src={img1} alt="" />
      </div>
    </div>
  );
};

export default Hero;
