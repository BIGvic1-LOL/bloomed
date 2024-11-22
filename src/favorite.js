import React, { useState, useEffect } from "react";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Retrieve saved quotes from localStorage when the component mounts
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites); // Set the favorites state
  }, []);

  const removeFromFavorites = (quoteId) => {
    const updatedFavorites = favorites.filter((quote) => quote._id !== quoteId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Update localStorage
  };

  return (
    <div>
      <h2>Your Favorite Quotes</h2>
      {favorites.length === 0 ? (
        <p>No favorite quotes saved yet.</p>
      ) : (
        <ul>
          {favorites.map((quote) => (
            <li key={quote._id}>
              <p>"{quote.content}"</p>
              <footer>- {quote.author}</footer>
              <button onClick={() => removeFromFavorites(quote._id)}>
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}

      <a href="/"> Back</a>
    </div>
  );
}

export default Favorites;
