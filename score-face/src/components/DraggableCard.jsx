import React from "react";
import RecipeReviewCard from "./Card";

export default function DraggableCard({ card, id, onLike, isLiked }) {
  return (
    <div>
      <RecipeReviewCard card={card} onLike={onLike} isLiked={isLiked} id={id} />
    </div>
  );
}
