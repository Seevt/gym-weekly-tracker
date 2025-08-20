import { createFileRoute } from "@tanstack/react-router";
// import logo from "../logo.svg";
import "../App.css";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App">
      <header className="App-header space-y-4">
        <h1>Gym weekly tracker</h1>
        <div className="flex gap-4 items-center">
          <Button asChild>
            <a
              className="App-link"
              href="https://tanstack.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn TanStack
            </a>
          </Button>

          <Button>SHADCN BUTTON PRIMITVE</Button>
        </div>
      </header>
    </div>
  );
}
