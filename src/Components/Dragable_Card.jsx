import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem({ id, title, image, icon, to }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging
      ? "transform 170ms cubic-bezier(0.4, 0, 0.2, 1)"
      : "transform 360ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: isDragging ? 50 : 1,
    boxShadow: isDragging
      ? "0 6px 36px 0 rgba(40, 98, 255, 0.15), 0 1.5px 4px 0 rgba(0,0,0,0.07)"
      : "0 2px 8px 0 rgba(40, 98, 255, 0.10), 0 1px 3px 0 rgba(0,0,0,0.06)",
    opacity: isDragging ? 0.97 : 1,
    background: "rgba(255,255,255,0.84)",
    textDecoration: "none",
  };

  return (
    <Link
      to={to || "#"}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`
        group
        flex items-center
        bg-white/80 dark:bg-slate-900/80
        dark:border-slate-700
        rounded-md
        shadow-xl
        transition-all
        duration-300
        px-5 py-6
        cursor-grab
        select-none
        backdrop-blur-md
        overflow-hidden
        min-h-[92px]
        mb-2
        hover:scale-[1.03]
        active:scale-[0.98]
        no-underline
      `}
    >
      <span className="mr-4 flex-shrink-0">
        {icon ? (
          icon
        ) : (
          <img
            src={image}
            alt={title}
            className="w-16 h-16 object-cover rounded-full border border-blue-100 shadow-md"
            draggable={false}
          />
        )}
      </span>
      <span className="font-bold text-lg text-slate-700 dark:text-white text-left">
        {title}
      </span>
    </Link>
  );
}

export default function Dragable_Card() {
  const [cards, setCards] = useState([
    {
      id: "1",
      title: "Patient profile",
      to: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-16 h-16 text-blue-500 bg-blue-100 rounded-full p-2">
          <path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"></path>
        </svg>
      ),
    },
    {
      id: "2",
      title: "Appointment request",
      to: "/dashboard/appointment_list",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10 text-red-500"><path d="M440-260h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM260-120q-24.75 0-42.375-17.625T200-180v-479q0-24.75 17.625-42.375T260-719h440q24.75 0 42.375 17.625T760-659v479q0 24.75-17.625 42.375T700-120H260Zm-20-660v-60h480v60H240Z"></path></svg>)
    },
    {
      id: "3",
      title: "Doctor visit history",
      to: "/dashboard/doctor_visits",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10 text-orange-500"><path d="M377-198v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189-161q-28.05 0-48.025-19Q121-199 121-227.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255-255.05 255-227q0 27.225-19.387 46.613Q216.225-161 189-161Zm0-252q-28.05 0-48.025-19.681Q121-452.362 121-480t19.975-47.319Q160.95-547 189-547q27.225 0 46.613 19.681Q255-507.638 255-480t-19.387 47.319Q216.225-413 189-413Zm-1-253q-27.637 0-47.319-19.681Q121-705.362 121-733t19.681-47.319Q160.363-800 188-800q27.637 0 47.319 19.681Q255-760.638 255-733t-19.681 47.319Q215.637-666 188-666Z"></path></svg>
      ),
    },
    {
      id: "4",
      title: "Prescription",
      to: "/dashboard",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10 text-purple-500"><path d="M680-330q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM440-50v-116q0-21 10-39.5t28-29.5q28-17 58-29.5t62-20.5l82 106 82-106q32 8 61.5 20.5T881-235q18 11 28.5 29.5T920-166v116H440Zm-60-116v46H180q-24.75 0-42.375-17.625T120-180v-600q0-24.75 17.625-42.375T180-840h600q24.75 0 42.375 17.625T840-780v247q-23-45-66-71t-94-26v-50H280v60h341q-38 14-67.5 43T510-510H280v60h220q0 31 10 59t28 51H280v60h157q-27 20-42 50.5T380-166Z"></path></svg>),
    },
    {
      id: "5",
      title: "Lab report",
      to: "/dashboard",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10 text-purple-500"><path d="M680-650q-20 0-35-15t-15-35q0-14 13.5-37.5T680-785q23 24 36.5 47.5T730-700q0 20-14.5 35T680-650Zm110 280q-37 0-63.5-26.5T700-460q0-31 27.5-77.5T790-625q34 41 62 87.5t28 77.5q0 37-26 63.5T790-370ZM360-250h60v-80h80v-60h-80v-80h-60v80h-80v60h80v80ZM220-80q-24 0-42-18t-18-42v-350q0-86 57-150t143-78v-102h-90v-60h240q29 0 55 8t49 23l-44 45q-14-8-28.5-12t-31.5-4h-90v102q86 14 143 78t57 150v350q0 24-18 42t-42 18H220Z"></path></svg>
      ),
    },
    {
      id: "6",
      title: "My orders",
      to: "/dashboard",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10 text-yellow-600"><path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h361l219 219v521q0 24-18 42t-42 18H220Zm230-121h60v-40h60q13 0 21.5-8.5T600-271v-130q0-13-8.5-21.5T570-431H420v-70h180v-60h-90v-40h-60v40h-60q-13 0-21.5 8.5T360-531v130q0 13 8.5 21.5T390-371h150v70H360v60h90v40Zm106-460h159L556-820v159Z"></path></svg>),
    }
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 120, tolerance: 5 } })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setCards((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={cards.map((card) => card.id)}
          strategy={rectSortingStrategy}
        >
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-4
              gap-8
            "
          >
            {cards.map((card) => (
              <SortableItem
                key={card.id}
                id={card.id}
                title={card.title}
                image={card.image}
                icon={card.icon}
                to={card.to}
              />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}