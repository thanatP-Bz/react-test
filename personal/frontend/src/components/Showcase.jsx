import React from "react";
import kid1 from "../images/kid-1.jpg";
import kid2 from "../images/kid-2.jpg";
import kid7 from "../images/kid-7.jpg";
import kid8 from "../images/kid-8.jpg";

const Showcase = () => {
  return (
    <div className="mx-[7%] my-[10%]">
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-2 h-4/5">
          <div>
            <img className="h-4/5 w-full object-cover" src={kid1} alt="kid1" />
          </div>
          <div>
            <img className="h-3/5 w-full object-cover" src={kid2} alt="kid2" />
          </div>
        </div>

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa illo
          iusto doloribus explicabo commodi cum! Cumque odio voluptatem
          molestias deleniti?
        </div>
      </div>
    </div>
  );
};

export default Showcase;
