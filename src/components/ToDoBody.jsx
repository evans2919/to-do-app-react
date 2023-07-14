/* eslint-disable react/prop-types */
import ToDoList from "./ToDoList";
import ToDoFilters from "./ToDoFilters";
import { Droppable, Draggable } from "@hello-pangea/dnd";
const ToDoBody = ({
    toDo,
    deleteToDo,
    updateToDo,
    deleteCompleted,
    toDoItemsLeft,
    changeFilter,
    filterToDo,
}) => {
    return (
        <main className="container mx-auto mt-4 px-4 ">
            <div className="overflow-hidden rounded-md shadow-2xl [&>article]:px-5 [&>article]:py-3 ">
                <>
                    <Droppable droppableId="todos">
                        {(droppableProvider) => (
                            <div
                                ref={droppableProvider.innerRef}
                                {...droppableProvider.droppableProps}
                            >
                                {toDo.map((toDo, index) => (
                                    <Draggable
                                        draggableId={`${toDo.id}`}
                                        key={toDo.id}
                                        index={index}
                                    >
                                        {(draggableProvider) => (
                                            <ToDoList
                                                ref={draggableProvider.innerRef}
                                                {...draggableProvider.dragHandleProps}
                                                {...draggableProvider.draggableProps}
                                                toDo={toDo}
                                                deleteToDo={deleteToDo}
                                                updateToDo={updateToDo}
                                            />
                                        )}
                                    </Draggable>
                                ))}
                                {droppableProvider.placeholder}
                            </div>
                        )}
                    </Droppable>
                </>

                <article className="flex justify-between  bg-white font-normal text-gray-400 dark:bg-[#25273c] dark:text-gray-500">
                    <span>{toDoItemsLeft} items left</span>
                    <div className="hidden lg:flex">
                        <ToDoFilters
                            toDo={toDo}
                            changeFilter={changeFilter}
                            filterToDo={filterToDo}
                        />
                    </div>

                    <>
                        <button
                            className="hover:text-gray-800 dark:hover:text-gray-100"
                            onClick={() => deleteCompleted()}
                        >
                            Clear Completed
                        </button>
                    </>
                </article>
            </div>
        </main>
    );
};
export default ToDoBody;
