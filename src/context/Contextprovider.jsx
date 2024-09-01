/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { AppContext } from "./createcontext";

export const ContextProvider = ({ children }) => {
  const [sidebaricon, setsidebaricon] = useState(0);
  const [size, setsize] = useState(50);
  const [Rotation, setRotation] = useState(0);
  const [color, setColor] = useState("rgba(255,255,255,1)");

  const [Rounded, setRounded] = useState(10);
  const [Padding, setPadding] = useState(0);
  const [bgColor, setbgColor] = useState("rgba(55,55,55,1)");

  const IconValue = {
    Size: `${size}px`,
    Rotation: `${Rotation}`,
    color: `${color}`,
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
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
