/* eslint-disable react/prop-types */
const ToDoFilters = ({toDo}) => {
    return (
        <>
            {toDo.length >= 1 && (
                <section className="container mx-auto mt-4 px-4">
                    <article className="flex justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-400">
                        <button className="text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Completed
                        </button>
                    </article>
                </section>
            )}
        </>
    );
}
export default ToDoFilters;