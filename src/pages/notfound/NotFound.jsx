import React from "react";
import './NotFound.css';

const NotFound = () =>{
    return(
        <div className="NotFound">
            <div>
                <h1>Whoops, thats page not found</h1>
                <p>It looks like that page doesnt exist - Please check the url and try again</p>
                <button className="primary-button">Go back</button>
            </div>
            <img src="https://image.freepik.com/vector-gratis/error-404-persona-que-busca-ilustracion-concepto_114360-7932.jpg" alt="" />
        </div>
    );
}
export default NotFound;