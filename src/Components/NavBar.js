import { Link } from "react-router-dom"
import * as tailwind from "../css/styles";

function NavBar() {
    return (
        <nav className={tailwind.nav}>
            <Link to="/" className={tailwind.nav_home}><h1>Snack-A-Log</h1></Link>
            <Link to="/snacks/new" className={tailwind.nav_button}><h2>Add Snack</h2></Link>
            <Link to="/snacks" className={tailwind.nav_button}><h2>All Snacks</h2></Link>
        </nav>
    );
}

export default NavBar;