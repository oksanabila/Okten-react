import styles from './FlightCard.module.css';
import {renderToString} from "react-dom/server";

const FlightComponent = (props) => {
    const { flight } = props;
    return (
        <div className={styles.flightWrap} >
            <h3>{flight.mission_name}</h3>
            <div>Year: {flight.launch_year}</div>
            <img src={flight.links.mission_patch_small} alt={flight.mission_name}/>
        </div>
    );
}
export default FlightComponent;