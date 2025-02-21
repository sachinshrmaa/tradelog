import React from "react";
import { Outlet } from "react-router";
import SideBar from "./components/sidebar";
import TopBar from "./components/topBar";

export default function PrimaryLayout({ children }) {
  return (
    <div className="grid grid-cols-20">
      <div className="col-span-3">
        <SideBar />
      </div>
      <div className="col-span-17">
        <div>
          <TopBar />
        </div>
        <div className="p-4">
          {/* <Outlet /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
