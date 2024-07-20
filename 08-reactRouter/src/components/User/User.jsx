import React from "react";
import { useParams } from "react-router-dom"; //hook
// function is hook 

function User(){
    const {userid} = useParams() //Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the route path.
    return(
        <div className="bg-gray-600 text-white text-3xl p-4"> User : {userid}</div>
    )
}

export default User