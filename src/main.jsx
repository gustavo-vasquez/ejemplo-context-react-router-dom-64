import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import UserProvider from "./context/userContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={router} />
        </UserProvider>
    </React.StrictMode>
); // uso mi componente personalizado <UserProvider /> (por detrás está retornando <UserContext.Provider /> con un value seteado previamente)
