/* eslint-disable react/prop-types */
import ToDoList from "./ToDoList";
const ToDoBody = ({ toDo, deleteToDo, updateToDo, deleteCompleted }) => {
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
                    <article className="flex justify-between  bg-white text-lg font-medium text-gray-400">
                        <span>{toDo.length + " " + "items left"}</span>

                        {toDo.filter((toDo) => toDo.completed).length >= 1 && (
                            <>
                                <button onClick={() => deleteCompleted()}>
                                    Clear completed
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
