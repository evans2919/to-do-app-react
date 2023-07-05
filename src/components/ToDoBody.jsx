/* eslint-disable react/prop-types */
import ToDoList from "./ToDoList";
const ToDoBody = ({ toDo }) => {
    return (
        <main className="container mx-auto mt-4 px-4">
            <div className="overflow-hidden rounded-md [&>article]:px-5 [&>article]:py-3 ">
                {toDo.map((toDo) => (
                    <ToDoList key={toDo.id} toDo={toDo} />
                ))}

                <article className="flex justify-between  bg-white text-sm font-medium text-gray-400">
                    <span>{toDo.length + " " + "items left"}</span>
                    <button>Clear completed</button>
                </article>
            </div>
        </main>
    );
};
export default ToDoBody;
