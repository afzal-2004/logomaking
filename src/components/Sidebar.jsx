import { TbIcons } from "react-icons/tb";
import { LiaImageSolid } from "react-icons/lia";
import { GiArmorUpgrade } from "react-icons/gi";
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
      icon: <GiArmorUpgrade className="text-[25px]" />,
      text: "Upgrade",
    },
  ];

  return (
    <>
      <div className="sidebarmain">
        <ul className=" w-full cursor-pointer ">
          {Sidebardata.map((data, i) => (
            <li
              key={i}
              className={` text-[20px] flex   items-center gap-3   p-3  ${
                sidebaricon === i && "bg-slate-200"
              } `}
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
