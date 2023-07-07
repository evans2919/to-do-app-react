/* eslint-disable react/prop-types */
import CrossIcon from "./icons/IconCross";
import CheckIcon from "./icons/IconCheck";
const ToDoList = ({ toDo, deleteToDo, updateToDo }) => {
    const { id, title, completed } = toDo;
    return (
        <article className="flex justify-between border-b-2 border-b-gray-200 bg-white">
            <div className="flex items-center gap-2">
                {completed ? (
                    <>
                        <button
                            className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#57ddff] to-[#c058f3]"
                            onClick={() => updateToDo(id)}
                        >
                            <CheckIcon />
                        </button>
                    </>
                ) : (
                    <button
                        className="inline-block h-5 w-5 rounded-full border-2"
                        onClick={() => updateToDo(id)}
                    ></button>
                )}

                <p
                    className={
                        completed
                            ? "text-sm font-semibold text-gray-400 line-through decoration-solid"
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
