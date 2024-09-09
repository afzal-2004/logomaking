/* eslint-disable react/prop-types */
import html2canvas from "html2canvas";
import { iconList } from "../components/constant";
import { useState, useEffect } from "react";
// import { AppContext } from "./Createcontext";
import { AppContext } from "./Context";

export const ContextProvider = ({ children }) => {
  const [sidebaricon, setsidebaricon] = useState(0);
  const [size, setsize] = useState(50);
  const [Rotation, setRotation] = useState(0);
  const [color, setColor] = useState("rgba(255,255,255,1)");

  const [Rounded, setRounded] = useState(10);
  const [Padding, setPadding] = useState(0);
  const [bgColor, setbgColor] = useState("rgba(55,55,55,1)");
  const [chooseIcon, setchooseIcon] = useState(false);
  const [selecticon, setselecticon] = useState(0);
  const [Logo, setLogo] = useState();
  const IconValue = {
    Size: `${size}px`,
    Rotation: `${Rotation}`,
    color: `${color}`,

    smile: `${iconList[selecticon]}`,
  };
  useEffect(() => {
    localStorage.setItem("Value", JSON.stringify(IconValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size, Rotation, color]);
  const backgroundValue = {
    Rounded: `${Rounded}px`,
    Padding: `${Padding}px`,
    bgColor: bgColor,
  };

  useEffect(() => {
    localStorage.setItem("BgValue", JSON.stringify(backgroundValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Rounded, Padding, bgColor]);

  useEffect(() => {
    console.log("BtnClicked");
    setLogo();
  }, [Logo]);
  const Downloadicon = () => {
    const Download = document.getElementById("Downloadicon");

    html2canvas(Download, {
      backgroundColor: null,
    }).then(function (canvas) {
      const pngImage = canvas.toDataURL("images/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "logo.png";
      downloadLink.click();
    });
    console.log(Download);
    console.log("btn CLicked");
  };

  const value = {
    setsidebaricon,
    sidebaricon,
    size,
    setsize,
    Rotation,
    setRotation,
    color,
    setColor,
    Rounded,
    setRounded,
    Padding,
    setPadding,
    bgColor,
    setbgColor,
    chooseIcon,
    setchooseIcon,
    selecticon,
    setselecticon,
    Downloadicon,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
