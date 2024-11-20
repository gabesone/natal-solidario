import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  function searchQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="container mx-auto my-2 flex gap-2 px-8">
      <input
        type="text"
        name="search"
        placeholder="Procurar por nome..."
        className="h-9 w-full rounded border-2 border-amber-300 px-4 py-2 text-base font-medium outline-none"
        onChange={searchQuery}
        defaultValue={query}
      />
      {/* Add button */}
      <div>
        <button>
          <span className="material-symbols-outlined text-3xl text-amber-600 transition-colors duration-300 hover:text-amber-400">
            add_box
          </span>
        </button>
      </div>
    </div>
  );
}

export default Search;
