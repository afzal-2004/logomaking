/* eslint-disable react/prop-types */
import { FaRegSmile } from "react-icons/fa";
import { AppContext } from "../context/createcontext";

import { iconList } from "./constant";
import { useContext } from "react";

export const IconPreview = () => {
  const { selecticon } = useContext(AppContext);

  const iconName = iconList[selecticon] || FaRegSmile;

  const Background = JSON.parse(localStorage.getItem("BgValue"));

  const styles = {
    backgroundColor: Background.bgColor,
    borderRadius: Background.Rounded,
    padding: Background.Padding,
  };
  const IconsValue = JSON.parse(localStorage.getItem("Value"));
  const iconStyle = {
    Color: IconsValue.color,
    Size: IconsValue.Size,
    transform: `rotate(${IconsValue.Rotation})`,
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
