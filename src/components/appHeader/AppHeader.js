import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/react-marvel-proj/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "#232222",
              })}
              to="/react-marvel-proj/"
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9F0013" : "#232222",
              })}
              to="/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
