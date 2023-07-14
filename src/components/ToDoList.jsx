/* eslint-disable react/prop-types */
import CrossIcon from "./icons/IconCross";
import CheckIcon from "./icons/IconCheck";
import React from "react";

const ToDoList = React.forwardRef(
    ({ toDo, deleteToDo, updateToDo, ...props }, ref) => {
        const { id, title, completed } = toDo;

        return (
            <article
                ref={ref}
                {...props}
                className="flex justify-between border-b border-b-gray-300 bg-white px-5 py-3 dark:border-b-gray-600 dark:bg-[#25273c] lg:[&>.delete-button]:hover:flex lg:[&>div>div>button]:hover:border-gray-500 lg:[&>div>div>button]:dark:hover:border-gray-100"
            >
                <div className="flex items-center gap-2">
                    <div className="flex">
                        <button
                            className={`h-5 w-5 rounded-full border dark:border-gray-600  ${
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
                            className={` text-lg font-normal ${
                                completed
                                    ? "text-gray-400 line-through dark:text-gray-600 "
                                    : "text-gray-800 dark:text-gray-300"
                            }`}
                        >
                            {title}
                        </p>
                    </div>
                </div>
                <div className="delete-button flex lg:hidden">
                    <button onClick={() => deleteToDo(id)}>
                        <CrossIcon />
                    </button>
                </div>
            </article>
        );
    }
);

ToDoList.displayName = "ToDoList";
export default ToDoList;
