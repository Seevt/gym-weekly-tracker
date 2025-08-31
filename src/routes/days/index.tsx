import type { CSSProperties } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Day } from "./$dayId";

export const Route = createFileRoute("/days/")({
  component: Days,
});

export function Days() {
  const week = [
    {
      id: 0,
      day: "lunes",
      routine: "back",
    },
    {
      id: 1,
      day: "martes",
      routine: "chest",
    },
    {
      id: 2,
      day: "miercoles",
      routine: "leg",
    },
    {
      id: 3,
      day: "jueves",
      routine: "shoulder",
    },
    {
      id: 4,
      day: "viernes",
      routine: "armss",
    },
  ];

  return (
    <div>
      <div
        style={
          {
            "--min": "21ch",
          } as CSSProperties
        }
        className="grid grid-cols-[repeat(auto-fit,_minmax(min(100%,_var(--min)),_1fr))] gap-4"
      >
        {week.map((day) => (
          <Link
            key={day.id}
            to="/days/$dayId"
            params={{ dayId: day.id.toString() }}
          >
            <Day />
          </Link>
        ))}
      </div>
    </div>
  );
}
