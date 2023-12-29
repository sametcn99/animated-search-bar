"use client";
import React, { useEffect, useState } from "react";
import { placeholders } from "../lib/placeholders";

const SearchBar = () => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    // Change the placeholder every second
    const intervalId = setInterval(() => {
      setCurrentPlaceholderIndex(() =>
        Math.floor(Math.random() * placeholders.length)
      );
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <input
      type="text"
      placeholder={placeholders[currentPlaceholderIndex]}
      className="max-w-[20rem] p-2 m-2 rounded-md"
    />
  );
};

export default SearchBar;
