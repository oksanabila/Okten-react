// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/ https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

const UserRickMorty = (props) => {
    const {id, name, status, species, gender, image} = props;
    return (
        <div className={'member'}>
            <div className={'flex'}>
                <h3>{name}</h3>
                <div>ID: {id}</div>
            </div>
            <div className={'flex'}>
                <div>Статус: {status}</div>
                <div>Вид: {species}</div>
            </div>

            <div>Стать: {gender}</div>
            <img src={image}/>
        </div>
    )
}


// let rickAndMorty = [
//     {
//         "id": 1,
//         "name": "Rick Sanchez",
//         "status": "Alive",
//         "species": "Human",
//         "gender": "Male",
//         "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     }, {
//         "id": 2,
//         "name": "Morty Smith",
//         "status": "Alive",
//         "species": "Human",
//         "gender": "Male",
//         "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
//
//     }, {
//         "id": 3,
//         "name": "Summer Smith",
//         "status": "Alive",
//         "species": "Human",
//         "gender": "Female",
//         "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
//     }, {
//         "id": 4,
//         "name": "Beth Smith",
//         "status": "Alive",
//         "species": "Human",
//         "gender": "Female",
//         "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
//     }, {
//         "id": 5,
//         "name": "Jerry Smith",
//         "status": "Alive",
//         "species": "Human",
//         "gender": "Male",
//         "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
//     }, {
//         "id": 6,
//         "name": "Abadango Cluster Princess",
//         "status": "Alive",
//         "species": "Alien",
//         "gender": "Female",
//         "image": "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
//     }
// ]
export default UserRickMorty;



