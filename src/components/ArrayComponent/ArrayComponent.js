import useArray from "../../hook/useArray";

export const ArrayComponent = () => {
    const {array, add, remove} = useArray([]);

    const handleAdd = () => {
        const newItem = {id: Date.now(), name: 'New array item'};
        add(newItem);
    };

    const handleRemove = (id) => {
        remove(id);
        console.log(array);
    };


    return (
        <div>
            <h2>ArrayComponent</h2>
            <button onClick={handleAdd}>Add item</button>
            <ul>
                {array.map((item) => (
                    <li key={item.id} className={'list-item'}>
                       <span> {item.name}</span>
                        <button onClick={() => handleRemove(item.id)} className={'secondary'}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
