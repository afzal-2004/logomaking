import { Smile } from "lucide-react";

import { AppContext } from "../context/Context";
import { useContext } from "react";
import ColorPicker from "react-best-gradient-color-picker";
import { iconList } from "./constant";

import "./Components.css";
export const Icons = () => {
  const {
    size,
    setsize,
    setRotation,
    Rotation,
    color,
    setColor,
    selecticon,
    setchooseIcon,
    chooseIcon,
  } = useContext(AppContext);

  const Icon = iconList[selecticon] || Smile;
  return (
    <>
      <div className="IconsMain  max-h-[90vh] relative ">
        <h1 className="text-[19px]"> Icons</h1>

        <Icon
          size={50}
          className="text-[50px] bg-white  p-2 rounded-lg"
          onClick={() => setchooseIcon(!chooseIcon)}
        />
        {chooseIcon && <IconList />}

        <div className=" max-w-[100vw]">
          <div className=" mt-5 w-full  ">
            <p className=" flex  justify-between  max-w-full">
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
                // console.log(new_Rotation);
                setRotation(new_Rotation);
              }}
            />
          </div>
        </div>
        <div className=" mt-5 flex   z-0   max-w-[100vw]  justify-center  ">
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

const IconList = () => {
  const { setselecticon, setchooseIcon, chooseIcon } = useContext(AppContext);
  return (
    <>
      <div className="w-[500px] h-[500px] overflow-y-scroll  grid grid-flow-row grid-cols-6 bg-white p-4  rounded-lg absolute  top-[10%]   right-[10%] z-50 ">
        {iconList.map((icon, i) => {
          const IconComponent = icon;

          return (
            <div
              key={i}
              style={{ margin: "5px" }}
              className="  text-[33px] w-[50px] h-[50px]  flex justify-center items-center bg-slate-200 rounded-lg"
              onClick={() => {
                setselecticon(i);
                setchooseIcon(!chooseIcon);
              }}
            >
              <IconComponent />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default IconList;
