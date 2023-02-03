import { Link } from "react-router-dom";
import * as tailwind from "../css/styles";
import Logo from "../assets/icons8-nachos-50.png";

function NavBar() {
  return (
    <nav className={tailwind.nav}>
      <Link to="/" className={tailwind.nav_home}>
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:bg-orange-500 relative inline-block rounded-lg mr-2 z-0">
          <img src={Logo} className="z-10 relative text-white rounded-lg"></img>
        </span>
        <h1>
          <i>i</i>Snack
        </h1>
      </Link>
      <Link to="/snacks/new" className={tailwind.nav_button}>
        <h2>Add Snack</h2>
      </Link>
      <Link to="/snacks" className={tailwind.nav_button}>
        <h2>All Snacks</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
