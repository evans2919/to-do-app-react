import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFilters from "./components/ToDoFilters";
import ToDoFooter from "./components/ToDoFooter";
import { useState } from "react";

const initialStateToDo = [];

const App = () => {
    const [toDo, setToDo] = useState(initialStateToDo);

    const createToDo = (newToDo) => {
        setToDo([...toDo, newToDo]);
    };

    const deleteToDo = (id) => {
        const newArray = toDo.filter((toDo) => toDo.id !== id);
        setToDo(newArray);
    };

    const updateToDo = (id) => {
        const newArray = toDo.map((toDo) => {
            if (toDo.id === id) {
                toDo.state = !toDo.state;
            }
            return toDo;
        });
        setToDo(newArray);
    };

    const deleteCompleted = () => {
        const newArray = toDo.filter((toDo) => !toDo.state);
        setToDo(newArray);
    };

    return (
        <>
            <div className="min-h-screen  bg-gray-100 bg-[url('/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat">
                <ToDoHeader createToDo={createToDo} />
                <ToDoBody
                    toDo={toDo}
                    deleteToDo={deleteToDo}
                    updateToDo={updateToDo}
                    deleteCompleted={deleteCompleted}
                />
                <ToDoFilters toDo={toDo} />
                <ToDoFooter toDo={toDo} />
            </div>
        </>
    );
};

export default App;
