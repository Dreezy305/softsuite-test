import React, { ReactNode, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";

const SidebarContext: any = createContext({});

function SidebarProvider({ children }: { children?: ReactNode }): JSX.Element {
  return (
    <div>
      <SidebarContext.Provider>
        <div
          style={{
            display: "flex",
            // flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          {/* <MaterialSideBar /> */}
          {children}
        </div>
      </SidebarContext.Provider>
    </div>
  );
}

export default SidebarProvider;
