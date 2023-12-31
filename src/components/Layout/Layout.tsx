import React, { ReactNode } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        // direction: rtl ? "rtl" : "ltr",
      }}
    >
      <SideBar />
      <main className="header-width">
        <div style={{ color: "#44596e" }}>
          <Header />
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;
