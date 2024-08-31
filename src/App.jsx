import { useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { IconPreview } from "./components/IconPreview";
import { AppContext } from "./context/createcontext";
import { Icons } from "./components/Icons";
import { Background } from "./components/Background";
import { Upgrade } from "./components/Upgrade";
function App() {
  const { sidebaricon } = useContext(AppContext);

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {sidebaricon === 0 ? (
          <Icons />
        ) : sidebaricon === 1 ? (
          <Background />
        ) : (
          <Upgrade />
        )}
        <IconPreview />
      </div>
    </>
  );
}

export default App;
