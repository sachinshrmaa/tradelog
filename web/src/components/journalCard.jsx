import React from "react";

export default function JournalCard({ title, content, timestamp }) {
  return (
    <div className="border border-[#bababa] rounded-lg p-4 hover:bg-gray-50">
      <small className="text-slate-600">{timestamp}</small>
      <h1 className="text-lg">{title}</h1>
      <p className="text-slate-600">{content}</p>
    </div>
  );
}
