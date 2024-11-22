import React, { useState, useEffect } from "react";
import "./random.css";
import axios from "axios";

function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  // Check localStorage to see if the quote is already saved
  const checkFavorite = (quoteId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.some((fav) => fav._id === quoteId);
  };

  // Save quote to localStorage
  const saveToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push(quote);
    localStorage.setItem("favorites", JSON.stringify(favorites)); // Save to localStorage
    setIsFavorite(true); // Update the UI to show it's saved
  };

  // Fetch quote from the API
  useEffect(() => {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data);
        setLoading(false);
        setIsFavorite(checkFavorite(response.data._id)); // Check if the quote is already a favorite
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="RandomBox">
      <h1>Random Quotes App</h1>
      <p>"{quote.content}"</p>
      <footer>- {quote.author}</footer>

      {/* Button to save the quote to favorites */}
      <div className="chest">
        <button className="heart">❤️</button>
        <button
          onClick={saveToFavorites}
          disabled={isFavorite} // Disable the button if the quote is already in favorites
          className="Status"
        >
          {isFavorite ? "Added to Favorites ✔️" : "Save to Favorites ⭐"}
        </button>
      </div>
    </div>
  );
}

export default RandomQuote;
