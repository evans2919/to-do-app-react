import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFilters from "./components/ToDoFilters";
import ToDoFooter from "./components/ToDoFooter";
import { useState } from "react";

const initialStateToDo = [];

const App = () => {
    const [toDo, setToDo] = useState(initialStateToDo);

    const createToDo = (title) => {
        const newToDo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setToDo([...toDo, newToDo]);
    };

    const deleteToDo = (id) => {
        setToDo(toDo.filter((toDo) => toDo.id !== id));
    };

    const updateToDo = (id) => {
        setToDo(
            toDo.map((toDo) =>
                toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
            )
        );
    };

    const deleteCompleted = () => {
        setToDo(toDo.filter((toDo) => !toDo.completed));
    };

    const toDoItemsLeft = toDo.filter((toDo) => !toDo.completed).length;

    return (
        <>
            <div className="min-h-screen  bg-gray-100 bg-[url('/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat">
                <ToDoHeader createToDo={createToDo} />
                <ToDoBody
                    toDo={toDo}
                    deleteToDo={deleteToDo}
                    updateToDo={updateToDo}
                    deleteCompleted={deleteCompleted}
                    toDoItemsLeft={toDoItemsLeft}
                />
                <ToDoFilters toDo={toDo} />
                <ToDoFooter toDo={toDo} />
            </div>
        </>
    );
};

export default App;
