import React from "react";
import { useEffect, useState } from "react";

const RouteComponent = (() => {

    const [route1, setRoute] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchRoute() {
            try{
                const response = await fetch(`http://localhost:${import.meta.env.VITE_SERVER_PORT}/test`);
                
                const data = await response.json();
                console.log(data);
                setRoute(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchRoute();
    }, []);
    return (
        <>
            <div></div>
        </>
    )
});

export default RouteComponent