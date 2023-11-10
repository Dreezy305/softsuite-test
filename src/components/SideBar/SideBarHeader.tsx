import React from "react";
import { ReactComponent as Softsuite } from "../../assets/softsuite.svg";

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  rtl,
  ...rest
}) => {
  return (
    <div
      style={{
        marginBottom: "24px",
        marginTop: "16px",
        height: "64px",
        minHeight: "64px",
        display: "flex",
        alignItems: "center",
        
      }}
      {...rest}
    >
      <div
        style={{ display: "flex", alignItems: "center", overflow: "hidden",padding: "0 30px", }}
      >
        <Softsuite />
      </div>
    </div>
  );
};
