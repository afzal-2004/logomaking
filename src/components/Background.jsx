import "./Components.css";
import ColorPicker from "react-best-gradient-color-picker";
import { AppContext } from "../context/createcontext";
import { useContext } from "react";
export const Background = () => {
  const { Rounded, setRounded, Padding, setPadding, setbgColor } =
    useContext(AppContext);
  return (
    <>
      <div className="IconsMain ">
        <div>
          <p className="flex justify-between">
            Rounded <span>{Rounded}px</span>
          </p>

          <input
            type="range"
            className="w-full"
            name="Rounded"
            value={Rounded}
            id=""
            max={100}
            onChange={(e) => {
              const newRounded = e.target.value;
              console.log(newRounded);
              setRounded(`${newRounded}`);
            }}
          />
        </div>
        <div>
          <p className="flex justify-between">
            Padding <span>{Padding}px</span>
          </p>
          <input
            type="range"
            className="w-full"
            name="Padding"
            value={Padding}
            max={100}
            onChange={(e) => {
              const newPadding = e.target.value;
              console.log(newPadding);
              setPadding(newPadding);
            }}
          />
        </div>
        <div className=" mt-5 flex justify-center">
          <ColorPicker
            hidePresets={true}
            width={250}
            height={250}
            onChange={setbgColor}
          />
        </div>
      </div>
    </>
  );
};
