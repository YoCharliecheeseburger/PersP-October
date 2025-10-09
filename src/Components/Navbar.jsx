import { Link } from "react-router-dom";
import "../App.css";

export function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-left">
          <Link to="/">Home</Link>
        </div>
        <div className="nav-center">
          <ul>
            <li><Link to="/plan">Plan</Link></li>
            <li><Link to="/create">Create</Link></li>
            <li><Link to="/spent">Spent</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

