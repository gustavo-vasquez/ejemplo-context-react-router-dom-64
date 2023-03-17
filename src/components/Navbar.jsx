import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Navbar = () => {
    const {user} = useUserContext();

    return ( // verifico si el usuario existe para mostrar mis url privadas
        <nav>
            <NavLink to="/">Home</NavLink>
            {user && <NavLink to="/dashboard">| Dashboard</NavLink>}
        </nav>
    );
};
export default Navbar;
