import { useState } from "react";
import serviceCenter from "../../../public/serviceCenter.json";

const SearchBox = ({ onSelect }) => {
  const [query, setQuery] = useState("");

  const filtered = serviceCenter.filter((d) =>
    d.district.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mb-6 relative">
      <input
        type="text"
        placeholder="Search district..."
        className="input input-bordered w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Suggestions */}
      {query && (
        <ul className="absolute w-full bg-white shadow-lg rounded-lg mt-2 max-h-60 overflow-y-auto z-50">
          {filtered.map((d, i) => (
            <li
              key={i}
              onClick={() => {
                onSelect(d);
                setQuery("");
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {d.district}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
