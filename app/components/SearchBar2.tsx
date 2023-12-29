"use client";
import React, { useEffect, useState } from "react";
import { placeholders } from "../lib/placeholders";

const SearchBar2 = () => {
  // State variables
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [placeholderChars, setPlaceholderChars] = useState<string[]>([]);
  const [placeholderCharIndex, setPlaceholderCharIndex] = useState(0);

  useEffect(() => {
    // Function to handle the animation logic
    const handleAnimation = () => {
      const currentWord = placeholders[currentPlaceholderIndex];

      // Check if there are characters left in the current word
      if (placeholderCharIndex < currentWord.length) {
        // Add a character to the placeholder
        setPlaceholderChars((prevChars) => [
          ...prevChars,
          currentWord[placeholderCharIndex],
        ]);
        setPlaceholderCharIndex((prevIndex) => prevIndex + 1);
      } else if (placeholderChars.length > 0) {
        // Word completed, start deleting
        setTimeout(() => {
          setPlaceholderChars((prevChars) => prevChars.slice(0, -1));
        }, 1000);
      } else {
        // Move to the next word when the current word is completed
        setCurrentPlaceholderIndex(() =>
          Math.floor(Math.random() * placeholders.length)
        );
        setPlaceholderCharIndex(0);
      }
    };

    // Set up the interval for the animation
    const intervalId = setInterval(handleAnimation, 200);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentPlaceholderIndex, placeholderChars, placeholderCharIndex]);

  return (
    <input
      type="text"
      placeholder={placeholderChars.join("")}
      className="max-w-[20rem] p-2 mx-2 rounded-md text-black"
    />
  );
};

export default SearchBar2;
