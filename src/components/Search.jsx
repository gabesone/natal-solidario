import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  function searchQuery(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="container mx-auto my-2 px-8">
      <input
        type="text"
        name="search"
        placeholder="Procurar por..."
        className="w-full rounded border-2 border-amber-300 px-4 py-2 text-xl font-medium outline-none"
        onChange={searchQuery}
        defaultValue={query}
      />
    </div>
  );
}

export default Search;
