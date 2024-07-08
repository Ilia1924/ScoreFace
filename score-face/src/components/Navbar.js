import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav_title">
        FootbalScore
      </Link>
      <ul>
        <LinkToPart to="/teams">My Teams</LinkToPart>
        <LinkToPart to="/translations">Going now</LinkToPart>
        <LinkToPart to="/info">About</LinkToPart>
      </ul>
    </nav>
  );
}

function LinkToPart({ to, children, ...props }) {
  // const path = window.location.pathname;
  const resovedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resovedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
