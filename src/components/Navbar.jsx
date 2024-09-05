import { ArrowDownToLine } from "lucide-react";
import logo from "/logo.svg";
import { AppContext } from "../context/createcontext";
import { useContext } from "react";
export const Navbar = () => {
  const { Downloadicon } = useContext(AppContext);
  return (
    <>
      <ul className=" bg-slate-400 flex  justify-between p-4  items-center">
        <li className="utilityClass gap-3">
          <img src={logo} alt="" />
          <h1 className="text-[20px]">Editior</h1>
        </li>
        <li>
          <button
            className="utilityClass "
            onClick={() => {
              Downloadicon();
            }}
          >
            <ArrowDownToLine />
            Download
          </button>
        </li>
      </ul>
    </>
  );
};
