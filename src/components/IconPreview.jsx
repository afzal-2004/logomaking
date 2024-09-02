/* eslint-disable react/prop-types */
import { FaRegSmile } from "react-icons/fa";

export const IconPreview = () => {
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
          <div style={styles} className="IconBacground">
            <Icons
              iconNode={FaRegSmile}
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
  return <LucideIcon color={color} size={size} transform={transform} />;
};

import * as icons from "react-icons";

const iconNames = Object.keys(icons);
console.log(iconNames);
