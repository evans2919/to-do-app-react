/* eslint-disable react/prop-types */
import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";
const ToDoList = ({ toDo, deleteToDo, updateToDo }) => {
    const { id, title, state } = toDo;
    return (
        <article className="flex justify-between border-b-2 border-b-gray-200 bg-white">
            <div className="flex items-center gap-2">
                {state ? (
                    <button
                        className="inline-block h-5 w-5 rounded-full"
                        onClick={() => updateToDo(id)}
                    >
                        <CheckIcon />
                    </button>
                ) : (
                    <button
                        className="inline-block h-5 w-5 rounded-full border-2"
                        onClick={() => updateToDo(id)}
                    ></button>
                )}

                <p
                    className={
                        state
                            ? "text-sm font-semibold text-gray-400 line-through"
                            : "text-sm font-semibold text-gray-600"
                    }
                >
                    {title}
                </p>
            </div>
            <button onClick={() => deleteToDo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
export default ToDoList;
