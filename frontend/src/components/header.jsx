//for icons

import { Link } from "react-router-dom";

function header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Click here to setup a goal</Link>
      </div>
      <ul>
        <li>
          <Link to="/login">
             Login
          </Link>
        </li>
        <li>
          <Link to="/register">
             Register
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default header;
