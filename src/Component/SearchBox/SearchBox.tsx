import React from "react";

interface SearchBoxProps {
  onInputChange: (inputValue: string) => void;
}

function SearchBox({ onInputChange }: SearchBoxProps) {
  return (
    <div>
      <input
        type="search"
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Search Pokemons"
      />
    </div>
  );
}

export default SearchBox;
