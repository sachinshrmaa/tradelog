import React from "react";

const MENU = [
  {
    id: 1,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    label: "Journals",
    href: "/journals",
  },
  {
    id: 3,
    label: "Trades",
    href: "/trades",
  },
  {
    id: 4,
    label: "Settings",
    href: "/settings",
  },
];

export default function SideBar() {
  return (
    <div className="border border-[#bababa] flex flex-col justify-between h-[100vh] py-4 px-6">
      <div>
        <div>
          <h1 className="font-semibold text-2xl mb-5 text-green-700">tradeLog</h1>
        </div>
        {MENU.map((menu) => (
          <a className="block mb-3 hover:text-green-600" key={menu.id} href={menu.href}>
            {menu.label}
          </a>
        ))}
      </div>

      <div>
        <a className="block mb-2 hover:text-green-600" href="/logout">
          Logout
        </a>
      </div>
    </div>
  );
}
