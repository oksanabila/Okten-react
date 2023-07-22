import {apiService} from "./apiService";
import {urls} from "../constants";

const todoService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todoService
}