import { useUserContext } from "../context/userContext";

const Dashboard = () => {
    const {user, setUser} = useUserContext(); // consumo los datos del usuario (contexto) para mostrarlos a través de mi hook personalizado

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bienvenido {user.name}</p>
            <p>{user.email}</p>
            <button onClick={() => setUser(false)}>Logout</button>
        </div>
    ); // al hacer clic en logout, el usuario es false y me va a redirigir a Home
};
export default Dashboard;
