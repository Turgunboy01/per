import React from "react";
import {
  Leader1,
  Leader2,
  Leader3,
  Leader4,
  Leader5,
  Leader6,
  Leader7,
} from "../../public/Svg";

const VentionImg = ({ clickMoon }) => {
  return (
    <div className="border-b p-[30px]">
      <div className="flex justify-between items-center">
        <Leader1 leader={clickMoon ? "#828283" : "#333334"} />
        <Leader2 leader={clickMoon ? "#949495" : "#2f2f2f"} />
        <Leader3 leader={clickMoon ? "#949495" : "#454546"} />
        <Leader4 leader={clickMoon ? "#949495" : "#353535"} />
        <Leader5 leader={clickMoon ? "#949495" : "#353535"} />
        <Leader6 leader={clickMoon ? "#949495" : "#2f2f2f"} />
        <Leader7 leader={clickMoon ? "#949495" : "#2f2f2f"} />
      </div>
    </div>
  );
};

export default VentionImg;
