import { FaRegSmile } from "react-icons/fa";
import { AppContext } from "../context/createcontext";
import { useContext } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import "./Components.css";
export const Icons = () => {
  const { size, setsize, setRotation, Rotation, color, setColor } =
    useContext(AppContext);
  return (
    <>
      <div className="IconsMain">
        <h1 className="text-[19px]"> Icons</h1>
        <FaRegSmile className="text-[50px] bg-white  p-2 rounded-lg" />

        <div>
          <div className=" mt-5  ">
            <p className=" flex  justify-between">
              size
              <span>{size}px</span>
            </p>

            <input
              className="Iconsinput
"
              type="range"
              name="Size"
              value={size}
              min={33}
              max={512}
              id=""
              onChange={(e) => {
                const new_Value = e.target.value;

                setsize(new_Value);
              }}
            />
          </div>
          <div className=" mt-5">
            <p className=" flex  justify-between">
              Rotate
              <span>{Rotation}°</span>
            </p>

            <input
              className=" Iconsinput"
              type="range"
              name="Size"
              value={Rotation}
              min="0"
              max="360"
              id=""
              onChange={(e) => {
                const new_Rotation = e.target.value;
                console.log(new_Rotation);
                setRotation(new_Rotation);
              }}
            />
          </div>
        </div>
        <div className=" mt-5 flex justify-center  ">
          <ColorPicker
            value={color}
            onChange={setColor}
            hidePresets={true}
            width={250}
            height={250}
          />
        </div>
      </div>
    </>
  );
};
