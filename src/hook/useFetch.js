import {useState, useEffect} from 'react';

function useFetch(endpoint) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com${endpoint}`);
                if (!response.ok) {
                    throw new Error('response wasn"t ok');
                }
                const data = await response.json();
                setData(data);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [endpoint]);

    return { data, isLoading, error };
}

export default useFetch;