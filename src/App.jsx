import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFilters from "./components/ToDoFilters";
import ToDoFooter from "./components/ToDoFooter";
import { DragDropContext } from "@hello-pangea/dnd";

import { useEffect, useState } from "react";

const initialStateToDo = JSON.parse(localStorage.getItem("toDo")) || [];

const App = () => {
    const [toDo, setToDo] = useState(initialStateToDo);
    useEffect(() => localStorage.setItem("toDo", JSON.stringify(toDo)), [toDo]);

    const createToDo = (title) => {
        const newToDo = {
            id: crypto.randomUUID(),
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

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;
        const copyArray = [...toDo];
        const [reorderedItem] = copyArray.splice(source.index, 1);
        copyArray.splice(destination.index, 0, reorderedItem);
        setToDo(copyArray);
    };

    return (
        <div className="bg-custom min-h-screen bg-gray-100 bg-mobile-light-img bg-no-repeat transition-all duration-500 dark:bg-[#181824] dark:bg-mobile-dark-img lg:bg-light-img dark:lg:bg-dark-img">
            <main className="container mx-auto pt-10 lg:max-w-xl">
                <ToDoHeader createToDo={createToDo} />

                <DragDropContext onDragEnd={handleDragEnd}>
                    <ToDoBody
                        toDo={filteredToDos()}
                        deleteToDo={deleteToDo}
                        updateToDo={updateToDo}
                        deleteCompleted={deleteCompleted}
                        toDoItemsLeft={toDoItemsLeft}
                        changeFilter={changeFilter}
                        filterToDo={filterToDo}
                    />
                </DragDropContext>

                <div className="lg:hidden">
                    <ToDoFilters
                        changeFilter={changeFilter}
                        filterToDo={filterToDo}
                    />
                </div>

                <ToDoFooter />
            </main>
        </div>
    );
};

export default App;
