import React from "react";
import { useSortable } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
import RecipeReviewCard from "./Card";

export default function DraggableCard({ card, id, onLike, isLiked }) {
  // const { attributes, listeners, setNodeRef, transform, transition } =
  //   useSortable({ id });

  // const style = {
  //   transform: CSS.Transform.toString(transform),
  //   transition,
  // };

  return (
    <div>
      <RecipeReviewCard card={card} onLike={onLike} isLiked={isLiked} id={id} />
    </div>
  );
}
