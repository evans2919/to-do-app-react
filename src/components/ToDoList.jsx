/* eslint-disable react/prop-types */
import CrossIcon from "./icons/IconCross";
import CheckIcon from "./icons/IconCheck";
const ToDoList = ({ toDo, deleteToDo, updateToDo }) => {
    const { id, title, completed } = toDo;
    return (
        <article className="flex justify-between border-b border-b-gray-300 bg-white dark:border-b-gray-600 dark:bg-[#25273c]">
            <div className="flex items-center gap-2">
                <div className="flex">
                    <button
                        className={`h-5 w-5 rounded-full border dark:border-gray-600 ${
                            completed
                                ? "flex items-center justify-center  bg-gradient-to-br from-[#57ddff] to-[#c058f3]"
                                : "inline-block"
                        }`}
                        onClick={() => updateToDo(id)}
                    >
                        {completed && <CheckIcon />}
                    </button>
                </div>
                <div className="flex">
                    <p
                        className={` font-normal text-lg ${
                            completed
                                ? "text-gray-400 line-through dark:text-gray-600 "
                                : "text-gray-800 dark:text-gray-300"
                        }`}
                    >
                        {title}
                    </p>
                </div>
            </div>
            <button onClick={() => deleteToDo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
export default ToDoList;
