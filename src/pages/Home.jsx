import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const Home = () => {
    const { setUser } = useUserContext(); // consumo sólo la función setUser() que es el único que necesito
    const navigate = useNavigate(); // este hook me sirve para redirigir mis rutas

    const handleLogin = () => {
        setUser({
            name: "Gato con botas",
            email: "gato_con_botas@gmail.com",
        });

        navigate("/dashboard"); // una vez "hace login", me manda al path privado 'dashboard'
    };

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};
export default Home;
