import React from 'react';
import useFetch from "../../hook/useFetch";

const FetchComponent = ({endpoint}) => {
    const {data, isLoading, error} = useFetch(endpoint);
    const title = endpoint.slice(1);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h3>{title}</h3>
            <div className={'grid-wrap'}>
                {data.map((item) => (
                    <div className={'item'} key={item.id}>
                        <div className={'item-title'}>{item.title}</div>
                        <div className={'item-name'}>{item.name}</div>
                        <div className={'item-body'}>{item.body}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FetchComponent;