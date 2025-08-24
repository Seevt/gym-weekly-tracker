import { createFileRoute } from "@tanstack/react-router";
import { Days } from "./days/index";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <Days />;
}
