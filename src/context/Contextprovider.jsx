/* eslint-disable react/prop-types */
import { useState } from "react";
import { AppContext } from "./createcontext";

export const ContextProvider = ({ children }) => {
  const [sidebaricon, setsidebaricon] = useState(0);
  const [size, setsize] = useState(50);
  const [Rotation, setRotation] = useState(0);
  const [color, setColor] = useState("rgba(255,255,255,1)");
  console.log(color);

  const value = {
    setsidebaricon,
    sidebaricon,
    size,
    setsize,
    Rotation,
    setRotation,
    color,
    setColor,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
