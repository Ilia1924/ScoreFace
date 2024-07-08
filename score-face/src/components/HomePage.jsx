import React, { useState, useEffect } from "react";
import FreeSoloCreateOptionDialog from "./FreeSoloCreateOptionDialog";
import RecipeReviewCard from "./Card";
import axios from "axios";

const BASE_URL =
  "https://www.thesportsdb.com/api/v1/json/3/search_all_leagues.php?c=England&s=Soccer";

export default function HomePage({ onLike, likedCards }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then(function (response) {
        setData(response.data.countries);
      })
      .catch(function (error) {
        setError(error);
      });
  }, []);

  return (
    <>
      <h1>HomePage</h1>
      <FreeSoloCreateOptionDialog />
      <div className="container">
        {error ? (
          <p>Error loading data: {error.message}</p>
        ) : (
          data.map((card) => (
            <RecipeReviewCard
              key={card.idLeague}
              card={card}
              onLike={onLike}
              isLiked={likedCards.some(
                (likedCard) => likedCard.idLeague === card.idLeague
              )}
            />
          ))
        )}
      </div>
    </>
  );
}
