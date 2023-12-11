import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom"

export function NotFound() {
    // return <h1>404 - Page Not Found!</h1>

    // return <Navigate to="/" />

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {

            navigate("/");
            // navigate(-1) // like clicking the back button

        }, 2000);

    }, [])


    return <h1>404 - Page Not Found!</h1>

}