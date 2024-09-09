/* eslint-disable react/prop-types */
import { FaRegSmile } from "react-icons/fa";
import { AppContext } from "../context/Context";

import { iconList } from "./constant";
import { useContext } from "react";

export const IconPreview = () => {
  const { selecticon } = useContext(AppContext);

  const iconName = iconList[selecticon] || FaRegSmile;

  const Background = JSON.parse(localStorage.getItem("BgValue"));

  const styles = {
    backgroundColor: Background?.bgColor || "red",
    borderRadius: Background?.Rounded || "0px",
    padding: Background?.Padding || "0px",
  };
  const IconsValue = JSON.parse(localStorage.getItem("Value"));
  const iconStyle = {
    Color: IconsValue?.color || "white",
    Size: IconsValue?.Size || "33px",
    transform: `rotate(${IconsValue?.Rotation})`,
  };

  return (
    <>
      <main className="IconPreviewmain IconsMain">
        <div className=" IconPreviewContainer">
          <div id="Downloadicon" style={styles} className="IconBacground">
            <Icons
              iconNode={iconName}
              color={iconStyle.Color}
              size={iconStyle.Size}
              transform={iconStyle.transform}
            />
          </div>
        </div>
      </main>
    </>
  );
};

const Icons = ({ iconNode: LucideIcon, color, size, transform }) => {
  return (
    <>
      <LucideIcon color={color} size={size} transform={transform} />
    </>
  );
};
