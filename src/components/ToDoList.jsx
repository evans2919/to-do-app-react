/* eslint-disable react/prop-types */
import CrossIcon from "./icons/CrossIcon";
const ToDoList = ({ toDo }) => {
    const { id, title, state } = toDo;
    return (
        <article className="flex justify-between border-b-2 border-b-gray-200 bg-white">
            <div className="flex items-center gap-2">
                <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                <p className="text-sm font-semibold text-gray-600">
                    {title}
                </p>
            </div>
            <button>
                <CrossIcon />
            </button>
        </article>
    );
};
export default ToDoList;
