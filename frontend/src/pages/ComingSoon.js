import logo from "../logo.svg";
import { Link } from "react-router-dom";

function ComingSoon() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="App-header-link" to="/about">
          Click here to learn what's coming soon...
        </Link>
        <img src={logo} className="App-logo" alt="logo" />

        <p>Maiya & Jenny</p>
        <p>Get Noticed</p>
      </header>
    </div>
  );
}
export default ComingSoon;
