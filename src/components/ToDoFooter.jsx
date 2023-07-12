/* eslint-disable react/prop-types */
const ToDoFooter = ({ toDo }) => {
    return (
        <>
            {toDo.length >= 1 && (
                <section className="container mx-auto mt-6">
                    <article className="px-5 py-3 text-lg font-medium text-gray-400 dark:text-gray-600 flex justify-center">
                        <p>
                            Drag and drop to reorder list
                        </p>
                    </article>
                </section>
            )}
        </>
    );
};

export default ToDoFooter;
