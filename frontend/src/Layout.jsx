import { Outlet } from "react-router-dom";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* MAIN HORIZONTAL ROW */}
      <div className="flex w-[80%] mx-auto">

        {/* LEFT SIDEBAR — 20% */}
        <div className="w-[20%] sticky top-0 h-screen">
          <LeftSidebar />
        </div>

        {/* CENTER — 55% (THIS CHANGES) */}
        <div className="w-[55%] border-x border-gray-200 min-h-screen mx-5 ">
          <Outlet />
        </div>

        {/* RIGHT SIDEBAR — 25% */}
        <div className="w-[25%] sticky top-0 h-screen">
          <RightSidebar />
        </div>

      </div>
    </div>
  );
};

export default Layout;
