/* eslint-disable react/prop-types */
import { IconName } from "./constant";
import { FaRegSmile } from "react-icons/fa";
import {} from "react-icons/fa";
const Dynamicicon = "FaUssunnah";

const selecticon = IconName[Dynamicicon];
console.log(selecticon);

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
              iconNode={selecticon ? selecticon : FaRegSmile}
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
