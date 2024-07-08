import React from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import DraggableCard from "./DraggableCard";

export default function MyTeams({ likedCards, setLikedCards }) {
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setLikedCards((items) => {
        const oldIndex = items.findIndex((item) => item.idLeague === active.id);
        const newIndex = items.findIndex((item) => item.idLeague === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  const handleUnlike = (card) => {
    setLikedCards((prev) => prev.filter((c) => c.idLeague !== card.idLeague));
  };

  return (
    <div>
      <h1>My Teams</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={likedCards.map((item) => item.idLeague)}
          strategy={verticalListSortingStrategy}
        >
          {likedCards.map((card) => (
            <DraggableCard
              key={card.idLeague}
              card={card}
              id={card.idLeague}
              onUnlike={handleUnlike}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
