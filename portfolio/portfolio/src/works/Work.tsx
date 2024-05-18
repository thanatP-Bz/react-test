import "./work.scss";
import work1 from "../assets/img/work-1.jpg";
import work2 from "../assets/img/work-2.jpg";
import work3 from "../assets/img/work-3.jpg";
import work4 from "../assets/img/work-4.jpg";
import work5 from "../assets/img/work-5.jpg";
import work6 from "../assets/img/work-6.jpg";

const Work = () => {
  return (
    <div className="work">
      <div className="work-text-container">
        <h1>My Works</h1>
        <div className="work-underline"></div>
      </div>

      <div className="works-image-container">
        <div className="img-works">
          <img src={work1} alt="work-1" />
        </div>
        <div className="img-works">
          <img src={work2} alt="work-2" />
        </div>
        <div className="img-works">
          <img src={work3} alt="work-3" />
        </div>
        <div className="img-works">
          <img src={work4} alt="work-4" />
        </div>
        <div className="img-works">
          <img src={work5} alt="work-5" />
        </div>
        <div className="img-works">
          <img src={work6} alt="work-6" />
        </div>
      </div>
    </div>
  );
};

export default Work;
