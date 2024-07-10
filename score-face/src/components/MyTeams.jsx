import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import DraggableCard from "./DraggableCard";

export default function MyTeams({ likedAppCards, setLikedAppCards, onLike }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLikedAppCards((items) => {
        const oldIndex = items.findIndex((item) => item.idLeague === active.id);
        const newIndex = items.findIndex((item) => item.idLeague === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      <div className="titleSection">
        <h1>xnkfnsol</h1>
      </div>
      <div className="container">
        {likedAppCards.length ? (
          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={likedAppCards.map((item) => item.idLeague)}
              strategy={verticalListSortingStrategy}
            >
              {likedAppCards.map((card) => (
                <DraggableCard
                  key={card.idLeague}
                  card={card}
                  id={card.idLeague}
                  onLike={onLike}
                  isLiked={likedAppCards.some(
                    (likedCard) => likedCard.idLeague === card.idLeague
                  )}
                />
              ))}
            </SortableContext>
          </DndContext>
        ) : (
          "Here will be your favorite teams"
        )}
      </div>
    </>
  );
}
