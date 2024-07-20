// we didn't name it as .jsx bcz hooks return purely javascript so we use .js extension

import { useEffect, useState } from "react";

function useCurrencyInfo (currency){

    const [data, setData] = useState({}) //{} -> empty object
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
        // fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json)
        .then((res)=> setData(res[currency])) //here is res is came in JASON format
    console.log(data);

    }, [currency]) //[]  it is a dependency array
    return data
} 


export default useCurrencyInfo