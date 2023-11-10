import React from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  MenuItemStyles,
  RenderExpandIconParams,
} from "react-pro-sidebar";
import { SidebarHeader } from "./SideBarHeader";
import { ReactComponent as Payroll } from "../../assets/payroll.svg";
import { ReactComponent as Dashboard } from "../../assets/dashboard.svg";
import { ReactComponent as Structure } from "../../assets/structure.svg";
import { ReactComponent as Setting } from "../../assets/Setting.svg";
import { ReactComponent as Employee } from "../../assets/employee.svg";
import { ReactComponent as Gear } from "../../assets/payroll 2.svg";
import { ReactComponent as Profile } from "../../assets/Profile.svg";
import { ReactComponent as Logout } from "../../assets/Logout.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";

const menuItemStyles: MenuItemStyles = {
  root: {
    fontSize: "14px",
    fontWeight: 400,
  },
  label: ({ open }) => ({
    fontWeight: open ? 600 : undefined,
  }),
};

function SideBar(): JSX.Element {
  const [collapsed, setCollapsed] = React.useState(false);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  return (
    <Sidebar
      collapsed={collapsed}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      onBreakPoint={setBroken}
      image=""
      rtl={rtl}
      breakPoint="md"
      backgroundColor={"#ffffff"}
      width={"300px"}
      rootStyles={{ borderRight: "1px solid #E7E7E7" }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <SidebarHeader
          rtl={rtl}
          style={{ marginBottom: "24px", marginTop: "16px" }}
        />
        <div style={{ flex: 1, marginBottom: "32px" }}>
          <Menu
            renderExpandIcon={(params: RenderExpandIconParams) => {
              return (
                <>{params?.open === false ? <ArrowUp /> : <ArrowDown />}</>
              );
            }}
            rootStyles={{ fontSize: "14px", fontWeight: 500 }}
          >
            <SubMenu
              label={
                <span className="d-flex flex-column">
                  <small className="super-menu-item">Switch Module</small>
                  <span className="menu-item">Payroll Management</span>
                </span>
              }
              icon={<Payroll />}
            >
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                System Administration
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                People Management
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Management
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Self Service
              </MenuItem>
            </SubMenu>
          </Menu>
          <div
            style={{
              padding: "0 24px",
              marginBottom: "8px",
              marginTop: "20px",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <small className="menu-item">
              <Dashboard /> &nbsp;Dashboard
            </small>
          </div>
          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
            }}
            renderExpandIcon={(params: RenderExpandIconParams) => {
              return (
                <>{params?.open === false ? <ArrowUp /> : <ArrowDown />}</>
              );
            }}
          >
            <SubMenu
              label={<span className="menu-item">Payroll Activities</span>}
              icon={<Payroll />}
            >
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Run
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Reversal
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll History
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Lock
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Enable Payslip
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Log
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Approval
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
              fontFamily: "PoppinsMedium",
            }}
          >
            <MenuItem icon={<Structure />}>Salary Structure</MenuItem>
          </Menu>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
              fontFamily: "PoppinsMedium",
            }}
            renderExpandIcon={(params: RenderExpandIconParams) => {
              return (
                <>{params?.open === false ? <ArrowUp /> : <ArrowDown />}</>
              );
            }}
          >
            <SubMenu
              label={<span className="menu-item">Element Setup</span>}
              icon={<Gear />}
            >
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Elements
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Balances
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
              fontFamily: "PoppinsMedium",
            }}
          >
            <MenuItem icon={<Employee />}>Employees</MenuItem>
          </Menu>

          <div
            style={{
              padding: "0 24px",
              marginBottom: "8px",
              marginTop: "20px",
            }}
          >
            <hr />
          </div>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
            }}
            renderExpandIcon={(params: RenderExpandIconParams) => {
              return (
                <>{params?.open === false ? <ArrowUp /> : <ArrowDown />}</>
              );
            }}
          >
            <SubMenu
              label={<span className="menu-item">Payroll Settings</span>}
              icon={<Gear />}
            >
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Payroll Options
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Deduction Account Setup
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Variation Partial Period
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Paygroup Setup
              </MenuItem>
              <MenuItem
                rootStyles={{
                  fontFamily: "PoppinsMedium",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Tax Setup
              </MenuItem>
            </SubMenu>
          </Menu>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
              fontFamily: "PoppinsMedium",
            }}
          >
            <MenuItem icon={<Profile />}>My Account</MenuItem>
          </Menu>

          <Menu
            rootStyles={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 0px",
              fontFamily: "PoppinsMedium",
            }}
          >
            <MenuItem icon={<Logout />}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Sidebar>
  );
}

export default SideBar;
