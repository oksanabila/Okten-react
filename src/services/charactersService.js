import {apiService} from "./apiService";
import {urls} from "../constants";

const charactersService = {
    getBiIds:(ids)=>apiService.get(urls.characters((ids)))
}
export {
    charactersService
}