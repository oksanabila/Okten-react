import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    // getAll: () => apiService.get(urls.posts.base)
    getById: (id, post) => apiService.get(urls.posts.byId(id), post),

}

export {
    postsService
}