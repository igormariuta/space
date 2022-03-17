import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Meta from "./Meta";

const Layout = ({ children }: any) => {
  const [sidebarVis, setSidebarVis] = useState(true);
  const changeSidebarVis = () => setSidebarVis((state) => !state);

  return (
    <>
      <Meta />
      <Header changeSidebarVis={changeSidebarVis} />
      <main className="main d-flex">
        <div className={`sidebar ${sidebarVis ? "" : "sidebar--toggle"}`}>
          <Sidebar />
        </div>
        <div className={`page p-4 ${sidebarVis ? "" : "page--fullWidth"} `}>
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
