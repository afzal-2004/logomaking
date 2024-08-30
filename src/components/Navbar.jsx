import { ArrowDownToLine } from "lucide-react";
import logo from "/logo.svg";

export const Navbar = () => {
  return (
    <>
      <ul className=" bg-slate-400 flex  justify-between p-4  items-center">
        <li className="utilityClass gap-3">
          <img src={logo} alt="" />
          <h1 className="text-[20px]">Editior</h1>
        </li>
        <li>
          <button className="utilityClass ">
            <ArrowDownToLine />
            Download
          </button>
        </li>
      </ul>
    </>
  );
};
