import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-brand-dark/15">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title} className="py-3">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between text-left text-base font-bold md:text-lg"
            >
              {item.title}
              <span className={`ml-4 text-sm transition ${isOpen ? "rotate-180" : ""}`}>⌃</span>
            </button>
            {isOpen && (
              <div className="mt-2 text-sm text-brand-dark/80">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}