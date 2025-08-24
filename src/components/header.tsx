import { Link } from "@tanstack/react-router";
export function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 bg-black">
        <h1>Gym Weekly Tracker</h1>
        <ul className="flex gap-4 w-min ml-auto justify-between ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
