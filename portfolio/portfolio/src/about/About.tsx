import "./about.scss";
import img2 from "../assets/img/beach.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-img-container">
        <img src={img2} alt="beach" />
      </div>

      <div className="about-content-container">
        <h1>ABOUT ME</h1>
        <div className="text-wrapper">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            sequi dolorum consequatur a totam maxime nam possimus perspiciatis
            harum explicabo alias saepe laboriosam, nobis aliquam, inventore
            dolorem, qui corporis expedita.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            sequi dolorum consequatur a totam maxime nam possimus perspiciatis
            harum explicabo alias saepe laboriosam, nobis aliquam, inventore
            dolorem, qui corporis expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
