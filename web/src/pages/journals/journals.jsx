import React, { useState } from "react";
import JournalCard from "../../components/journalCard";
import { useEffect } from "react";

const JOURNALS = [
  {
    journal_id: 1,
    title: "A perfect A+ Trade",
    content: "this is an example of a perfect A+ trade execution.",
    created_at: "26 Apr, 2001",
  },
  {
    journal_id: 2,
    title: "A perfect A+ Trade",
    content: "this is an adfasdf ads fadsf asd ads fadsf example of a perfect A+ trade execution.",
    created_at: "26 Apr, 2001",
  },
  {
    journal_id: 2,
    title: "A perfect A+ Trade",
    content: "this is an example of a perfect A+ trade execution.",
    created_at: "26 Apr, 2001",
  },
  {
    journal_id: 2,
    title: "A perfect A+ Trade",
    content:
      "this is an example of a perfect A+ trade asdf adsf asdf asdf asd fasdf asfdexecution.",
    created_at: "26 Apr, 2001",
  },
];

export default function Journals() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    setJournals(JOURNALS);
  }, []);

  return (
    <div className="pr-[30px] pl-4 py-5">
      <div className="mb-8 flex justify-between">
        <h1 className="text-lg text-gray-900">Journals</h1>

        <button className="bg-green-700 p-2 px-4 rounded text-white text-sm">Add Journal</button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {journals.map((journal) => (
          <JournalCard
            key={journal.id}
            title={journal.title}
            content={journal.content}
            timestamp={journal.created_at}
          />
        ))}
      </div>
    </div>
  );
}
