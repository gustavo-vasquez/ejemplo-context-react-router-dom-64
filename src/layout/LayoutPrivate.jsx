import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const LayoutPrivate = () => {
    const {user} = useUserContext(); // consumo sólo el objeto 'user' que es el único que necesito
    const navigate = useNavigate(); // este hook me sirve para redirigir mis rutas

    useEffect(() => {
        if (!user) navigate("/"); // si el usuario no existe, lo mandó a <Home /> que es la ruta por defecto de <LayoutRoot />
    }, [user]); // cuando el objeto 'user' cambia su valor, automáticamente vuelve a hacer la comprobación

    return (
        <>
            <h1>LayoutPrivate</h1>
            <Outlet />
        </>
    );
};
export default LayoutPrivate;
