import { Outlet, NavLink } from "react-router";


export default function AppLayout() {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <ul className="flex items-center gap-2 p-4 bg-zinc-200">
      <li>
        <NavLink to="/">Home Page</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Page</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Page</NavLink>
      </li>
      <li>
        <NavLink to="/issue-list">Issue List</NavLink>
      </li>
    </ul>
  );
}

function Footer() {
  return <div className="p-8 bg-zinc-300">Footer</div>;
}
