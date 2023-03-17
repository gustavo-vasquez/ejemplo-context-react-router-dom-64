import { createContext, useContext, useState } from "react";

export const UserContext = createContext(); // mediante contextAPI voy a poder acceder al valor de UserContext desde los otros componentes

// Mediante el provider puedo modificar el valor del contexto (UserContext)
const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState(false);

    return ( // el .Provider hace referencia a un componente que se asocia al UserContext cuando lo creo mediante createContext()
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    ); // es recomendable que en "value" no se defina explícitamente su valor porque provocará renderizado de sus children cada vez que se actualice
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext); // creo un hook personalizado que va a devolver el valor de UserContext (en este caso: el objeto 'user' y la función de seteo 'setUser' encapsulados a su vez por { })