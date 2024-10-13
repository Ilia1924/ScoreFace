import React from "react";
import RecipeReviewCard from "./Card";

export default function DraggableCard({ card, id, onLike, isLiked }) {
  return (
    <RecipeReviewCard card={card} onLike={onLike} isLiked={isLiked} id={id} />
  );
}
