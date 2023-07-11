/* eslint-disable react/prop-types */
import ToDoList from "./ToDoList";
const ToDoBody = ({
    toDo,
    deleteToDo,
    updateToDo,
    deleteCompleted,
    toDoItemsLeft,
}) => {
    return (
        <main className="container mx-auto mt-4 px-4 ">
            <div className="overflow-hidden rounded-md shadow-xl [&>article]:px-5 [&>article]:py-3 ">
                {toDo.map((toDo) => (
                    <ToDoList
                        key={toDo.id}
                        toDo={toDo}
                        deleteToDo={deleteToDo}
                        updateToDo={updateToDo}
                    />
                ))}

                {toDo.length >= 1 && (
                    <article className="flex justify-between  bg-white font-normal text-gray-400 dark:bg-[#25273c] dark:text-gray-500">
                        <span>{toDoItemsLeft} items left</span>

                        {toDo.filter((toDo) => toDo.completed).length >= 1 && (
                            <>
                                <button onClick={() => deleteCompleted()}>
                                    Clear Completed
                                </button>
                            </>
                        )}
                    </article>
                )}
            </div>
        </main>
    );
};
export default ToDoBody;
