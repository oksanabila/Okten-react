import axios from 'axios';

const placeholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type':'application/json'}

});

const cars = axios.create({
    baseURL: 'http://owu.linkpc.net/carsAPI/v1'
});

const Endpoints = {
    USERS: '/users',
    COMMENTS: '/comments',
    CARS: '/cars'
}

export const UsersService = {
    setUsersService: async ({setUsers}) => {
        try {
            let response= await placeholder.get(Endpoints.USERS)
            setUsers(response.data)

        } catch {}

    },
    saveUsersService: async ({user, setUsers, reset}) => {
        try {
            let response= await placeholder.post(Endpoints.USERS, {
                id: user.id,
                name: user.name,
                username: user.username,
                email: user.email,
                address: {
                    city: user.address.city,
                }
            })
            setUsers(prev => [...prev, response.data])
            reset()
            } catch {}
    }
}

export const CommentsService = {
    setCommentsService: async ({setComments}) => {
        try {
            let response= await placeholder.get(Endpoints.COMMENTS);
            setComments(response.data);
        } catch {}
    },
    saveCommentsService: async ({comment, setComments, reset}) => {
        try {
            let response= await placeholder.post(Endpoints.COMMENTS, {
                postId: comment.postId,
                id: comment.id,
                name: comment.name,
                email: comment.email,
                body: comment.body,

            })
            setComments(prev => [...prev, response.data])
            reset()
        } catch {}
    }
}

export const CarsService = {
    setCarsService : async ({setCars}) => {
        try {
            let response= await cars.get(Endpoints.CARS);
            setCars(response.data);
        } catch {}
    },
    deleteCarService: async ({setOnSave, id}) => {
        try {
            let response= await cars.delete(`${Endpoints.CARS}/${id}`);
            setOnSave(prev => response.data);
        } catch {}
    },

    // TODO переробити на axios
    saveCarsService: ({data, setOnSave, reset}) => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars`, {
            headers:{'content-type':'application/json'},
            body:JSON.stringify(data),
            method: 'POST'
        }).then(value =>  {
            if(!value.ok) {
                throw Error(value.status+' not ok');
            }
            return value.json()
        })
            .then(() => {
                setOnSave(prev => !prev)
                reset()
            })
            .catch(e => {
                console.log(e);
            })
    },
    updateCarService: async ({car, carForUpdate, setOnSave, setCarForUpdate, reset}) => {
        try {
            let response= await cars.put(Endpoints.CARS);
            setOnSave(prev => !prev)
            setCarForUpdate(null)
            reset()
        } catch {}

        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
            headers:{'content-type':'application/json'},
            body:JSON.stringify(car),
            method: 'PUT'
        }).then(value => value.json()).then(() => {
            setOnSave(prev => !prev)
            setCarForUpdate(null)
            reset()
        })
    }
}