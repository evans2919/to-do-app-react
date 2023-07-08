import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFilters from "./components/ToDoFilters";
import ToDoFooter from "./components/ToDoFooter";
import { useEffect, useState } from "react";

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

    const [filterToDo, setFilterToDo] = useState("all");

    const changeFilter = (filterToDo) => setFilterToDo(filterToDo);

    const filteredToDos = () => {
        switch (filterToDo) {
            default:
                "all";
                return toDo;
            case "active":
                return toDo.filter((toDo) => !toDo.completed);
            case "completed":
                return toDo.filter((toDo) => toDo.completed);
        }
    };

    return (
        <>
            <div className="mx-auto  min-h-screen bg-gray-100 bg-[url('/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat">
                <ToDoHeader createToDo={createToDo} />
                <ToDoBody
                    toDo={filteredToDos()}
                    deleteToDo={deleteToDo}
                    updateToDo={updateToDo}
                    deleteCompleted={deleteCompleted}
                    toDoItemsLeft={toDoItemsLeft}
                />
                <ToDoFilters
                    toDo={toDo}
                    changeFilter={changeFilter}
                    filterToDo={filterToDo}
                />
                <ToDoFooter toDo={toDo} />
            </div>
        </>
    );
};

export default App;
