import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Ensure currency is valid before fetching

        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // Return JSON from the response
            .then((res) => {
                console.log("API Response:", res); // Debug the response
                setData(res[currency] || {}); // Safely set data
            })
            .catch((error) => {
                console.error("Fetch error:", error);
                setData({}); // Clear data in case of fetch errors
            });
    }, [currency]); // Correctly placed dependency array

    return data;
}

export default useCurrencyInfo;
