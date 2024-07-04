import { useEffect, useState } from "react";

export default function useApiFetch(url, options = {}) {
    const [data, setData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url, options);
                if(!response.ok) {
                    throw new Error(`Network response was not ok ${response.status}`)
                }
                const result = await response.json();
                setData(result)
            }   catch(error) {
                // console.error(error)
            }
        }
        fetchData();
    }, [])
    return data;
}