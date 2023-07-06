import FlightComponent from "./FlightComponent/FlightComponent";
import { useEffect, useState } from 'react';
import { logDOM } from '@testing-library/react';


export const FlightCard = () => {
    const [ posts, setPosts ] = useState(null);
    const [ errors, setErrors ] = useState();

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((errors) => console.log(errors.response))
            .finally(() => {
                console.log('Promise finished')
            });

    },[]);

    const handleClick = (value) => {
        alert(`${value}`);

    };

    return (
        <>
            {posts?.map((flight, id) => {
                return (
                    <FlightComponent
                        key={id}
                        flight={flight}
                    />
                );
            })}
        </>);
}
export default FlightCard;




