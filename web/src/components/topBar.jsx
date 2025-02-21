import React from "react";

export default function TopBar() {
  return (
    <div className="border-b border-[#bababa] p-3 flex justify-between items-center">
      <div></div>
      <div className="w-[400px]">
        <input
          placeholder="search anything..."
          className="p-2 px-3 text-sm rounded-md bg-gray-200 w-full"
        />
      </div>
      <div className="pr-8">
        <p>[sachin]</p>
      </div>
    </div>
  );
}
