/* eslint-disable react/prop-types */
import CrossIcon from "./icons/IconCross";
import CheckIcon from "./icons/IconCheck";
const ToDoList = ({ toDo, deleteToDo, updateToDo }) => {
    const { id, title, completed } = toDo;
    return (
        <article className="flex justify-between border-b-2 border-b-gray-200 bg-white">
            <div className="flex items-center gap-2">
                <>
                    <button
                        className={`h-5 w-5 rounded-full border-2 ${
                            completed
                                ? "flex items-center justify-center  bg-gradient-to-br from-[#57ddff] to-[#c058f3]"
                                : "inline-block"
                        }`}
                        onClick={() => updateToDo(id)}
                    >
                        {completed && <CheckIcon />}
                    </button>
                </>

                <p
                    className={`text-sm font-semibold ${
                        completed
                            ? "text-gray-400 line-through"
                            : "text-gray-600"
                    }`}
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
