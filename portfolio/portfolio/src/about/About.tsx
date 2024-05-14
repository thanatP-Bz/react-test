import "./about.scss";
import img2 from "../assets/img/beach.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-img-container">
        <img src={img2} alt="beach" />
      </div>

      <div className="about-content-container">
        <div className="about-content-wrapper">
          <h1>ABOUT ME</h1>
          <div className="about-underline"></div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            sequi dolorum consequatur a totam maxime nam possimus perspiciatis
            harum explicabo alias saepe laboriosam, nobis aliquam, inventore
            dolorem, qui corporis expedita. Lorem ipsum dolor, sit amet
            <br />
            consectetur adipisicing elit. Quaerat sequi dolorum consequatur a
            totam maxime nam possimus perspiciatis harum explicabo alias saepe
            laboriosam, nobis aliquam, inventore dolorem, qui corporis expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
