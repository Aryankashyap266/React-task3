import "./Colorpick.css";
import { useState } from "react";
function Colourpick() {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState("rgb(255, 255, 255)");
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleColor = (value) => {
    setColor(value);
  };
  return (
    <div
      class="carous d-flex flex-column justify-content-center align-items-center shadow-lg"
      style={{ backgroundColor: color }}
    >
      <div class="d-flex flex-column text-center ">
        <button
          class="btn btn-success border-1 rounded-0"
          onClick={handleClick}
          style={{ maxWidth: "150px" }}
        >
          Pick a colour
        </button>
      </div>
      {isOpen && (
        <div class="d-flex mt-4 pb-3">
          <div
            class="colorbox border border-dark  border-1  "
            style={{ backgroundColor: "rgb(254, 0, 0)" }}
            onClick={() => handleColor("rgb(254, 0, 0)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(0, 255, 1)" }}
            onClick={() => handleColor("rgb(0, 255, 1)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(1, 0, 252)" }}
            onClick={() => handleColor("rgb(1, 0, 252)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(255, 255, 0)" }}
            onClick={() => handleColor("rgb(255, 255, 0)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(253, 0, 254)" }}
            onClick={() => handleColor("rgb(253, 0, 254)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(0, 255, 255)" }}
            onClick={() => handleColor("rgb(0, 255, 255)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(254, 165, 0)" }}
            onClick={() => handleColor("rgb(254, 165, 0)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(129, 0, 127)" }}
            onClick={() => handleColor("rgb(129, 0, 127)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(255, 192, 203)" }}
            onClick={() => handleColor("rgb(255, 192, 203)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(254, 99, 71)" }}
            onClick={() => handleColor("rgb(254, 99, 71)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            onClick={() => handleColor("rgb(255, 255, 255)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(0, 128, 1)" }}
            onClick={() => handleColor("rgb(0, 128, 1)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(0, 206, 209)" }}
            onClick={() => handleColor("rgb(0, 206, 209)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(139, 69, 18)" }}
            onClick={() => handleColor("rgb(139, 69, 18)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(255, 139, 0)" }}
            onClick={() => handleColor("rgb(255, 139, 0)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(70, 129, 179)" }}
            onClick={() => handleColor("rgb(70, 129, 179)")}
          ></div>
          <div
            class=" colorbox border border-dark  border-1 "
            style={{ backgroundColor: "rgb(251, 212, 0)" }}
            onClick={() => handleColor("rgb(251, 212, 0)")}
          ></div>
        </div>
      )}
    </div>
  );
}
export default Colourpick;
