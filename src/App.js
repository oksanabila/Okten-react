import './App.css';
import {posts} from "./assets/posts";
import FlightComponent from "./components/FlightCard/FlightComponent/FlightComponent";
import FlightCard from "./components/FlightCard/FlightCard";
import styles from "./components/FlightCard/FlightComponent/FlightCard.module.css";

function App() {
    return (
        <div className={'container'}>
            <h1>Запуски SpaceX</h1>
            <FlightCard/>
        </div>

    );
}




export default App;