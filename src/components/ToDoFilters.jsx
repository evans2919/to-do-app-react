/* eslint-disable react/prop-types */
const ToDoFilters = ({ toDo, changeFilter, filterToDo }) => {
    return (
        <>
            {toDo.length >= 1 && (
                <section className="container mx-auto mt-4 px-4">
                    <article className="flex justify-center gap-2 rounded-md bg-white px-5 py-3 text-lg font-semibold text-gray-400">
                        <button
                            className={
                                filterToDo === "all"
                                    ? "text-blue-600 hover:text-gray-400"
                                    : "text-gray-400 hover:text-blue-600"
                            }
                            onClick={() => changeFilter("all")}
                        >
                            All
                        </button>
                        <button
                            className={
                                filterToDo === "active"
                                    ? "text-blue-600 hover:text-gray-400"
                                    : "text-gray-400 hover:text-blue-600"
                            }
                            onClick={() => changeFilter("active")}
                        >
                            Active
                        </button>
                        <button
                            className={
                                filterToDo === "completed"
                                    ? "text-blue-600 hover:text-gray-400"
                                    : "text-gray-400 hover:text-blue-600"
                            }
                            onClick={() => changeFilter("completed")}
                        >
                            Completed
                        </button>
                    </article>
                </section>
            )}
        </>
    );
};
export default ToDoFilters;
