"use client";
// import React, { useState } from "react";
// import { DndContext, useDraggable, useDroppable } from "@dnd-kit/core";

// // Sample data
// const initialItems = [
//   { id: "item-1", content: "Item 1" },
//   { id: "item-2", content: "Item 2" },
//   { id: "item-3", content: "Item 3" },
// ];

// function DraggableItem({ id, content }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id,
//   });

//   const style = {
//     transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
//     padding: "8px",
//     margin: "4px",
//     backgroundColor: "#f0f0f0",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//     cursor: "move",
//   };

//   return (
//     <li ref={setNodeRef} style={style} {...listeners} {...attributes}>
//       {content}
//     </li>
//   );
// }

// function DroppableContainer({ items, setItems }) {
//   const { setNodeRef } = useDroppable({
//     id: "droppable",
//   });

//   return (
//     <ul
//       ref={setNodeRef}
//       style={{ listStyle: "none", padding: 0, margin: 0, width: "200px" }}
//     >
//       {items.map((item) => (
//         <DraggableItem key={item.id} id={item.id} content={item.content} />
//       ))}
//     </ul>
//   );
// }

// function App() {
//   const [items, setItems] = useState(initialItems);

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (active && over && active.id !== over.id) {
//       const oldIndex = items.findIndex((item) => item.id === active.id);
//       const newIndex = items.findIndex((item) => item.id === over.id);
//       const reorderedItems = [...items];

//       const [movedItem] = reorderedItems.splice(oldIndex, 1);
//       reorderedItems.splice(newIndex, 0, movedItem);

//       setItems(reorderedItems);
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd}>
//       <DroppableContainer items={items} setItems={setItems} />
//     </DndContext>
//   );
// }
import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { useDraggable, useDroppable } from "@dnd-kit/core";

const DraggableItem = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    padding: "8px",
    margin: "4px",
    backgroundColor: "lightgrey",
    cursor: "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

const DroppableContainer = ({ id, children }) => {
  const { setNodeRef } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      style={{ padding: "8px", border: "1px solid black", marginBottom: "4px" }}
    >
      {children}
    </div>
  );
};

const DraggableComponent = () => {
  const [items, setItems] = useState(["item1", "item2", "item3"]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);

      const updatedItems = [...items];
      const [movedItem] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, movedItem);

      setItems(updatedItems);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      {items.map((item) => (
        <DroppableContainer key={item} id={item}>
          <DraggableItem id={item}>{item}</DraggableItem>
        </DroppableContainer>
      ))}
    </DndContext>
  );
};

export default DraggableComponent;
