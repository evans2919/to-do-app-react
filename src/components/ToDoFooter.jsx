/* eslint-disable react/prop-types */
const ToDoFooter = ({ toDo }) => {
    return (
        <>
            {toDo.length >= 1 && (
                <section className="container mx-auto mt-6 px-4">
                    <article className="px-5 py-3 font-semibold text-lg text-gray-400 ">
                        <p className="text-center">
                            Drag and drop to reorder list
                        </p>
                    </article>
                </section>
            )}
        </>
    );
};

export default ToDoFooter;
