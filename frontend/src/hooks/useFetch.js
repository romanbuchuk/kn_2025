import { useState, useEffect, useCallback } from 'react';

const mainUrl = 'https://jsonplaceholder.typicode.com/';
const useFetch = (endpointName = 'todos') => {
    const [items, setItems] = useState([]);
    const url = `${mainUrl}/${endpointName}`;

    const fetchData = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }


    useEffect(() => {
        fetchData(url);
    }, [url]);

    return { items, fetchData };
};

export default useFetch;