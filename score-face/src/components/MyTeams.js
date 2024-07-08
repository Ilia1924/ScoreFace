// MyTeams.js
import React from "react";
import RecipeReviewCard from "./Card";
import { useLikedCards } from "./LikedCardsContext";

export default function MyTeams() {
  const { likedCards } = useLikedCards();

  return (
    <>
      <h1>My Teams</h1>
      <div className="content">
        {likedCards.length === 0 ? (
          <p>No liked teams yet.</p>
        ) : (
          likedCards.map((card) => (
            <RecipeReviewCard key={card.idLeague} card={card}/>
          ))
        )}
      </div>
    </>
  );
}
