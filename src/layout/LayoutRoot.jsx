import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutRoot = () => {
    return (
        <>
            <Navbar />
            <h1>LayoutRoot</h1>
            <Outlet />
            <footer>Soy el footer</footer>
        </>
    );
};
export default LayoutRoot;
