import { TbIcons } from "react-icons/tb";
import { LiaImageSolid } from "react-icons/lia";
import { FaExclamationCircle } from "react-icons/fa";

import { AppContext } from "../context/createcontext";
import { useContext } from "react";
import "./Components.css";
export const Sidebar = () => {
  const { setsidebaricon, sidebaricon } = useContext(AppContext);
  const Sidebardata = [
    {
      icon: <TbIcons className="text-[25px]" />,
      text: "Icons",
    },
    {
      icon: <LiaImageSolid className="text-[25px]" />,
      text: "Background",
    },
    {
      icon: <FaExclamationCircle className="text-[25px]" />,
      text: "About",
    },
  ];

  return (
    <>
      <div className=" sidebarmain cursor-pointer   ">
        <ul className=" w-full   flex   grid-cols-2   flex-row sm:flex-col   ">
          {Sidebardata.map((data, i) => (
            <li
              key={i}
              className={` sm:w-[100%] w-[50%] text-[20px] flex   items-center gap-3   p-3  ${
                sidebaricon === i && "bg-slate-200 text-blue-300"
              }  ${i == 2 && "sm:flex hidden"}`}
              onClick={() => {
                setsidebaricon(i);
              }}
            >
              {data.icon}
              <p>{data.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
