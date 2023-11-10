import React, { ReactNode, useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

function Layout({ children }: { children: ReactNode }) {
  const [rtl, setRtl] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        direction: rtl ? "rtl" : "ltr",
      }}
    >
      <SideBar />
      <main className="header-width">
        <div style={{  color: "#44596e" }}>
          <Header />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
