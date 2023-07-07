/* eslint-disable react/prop-types */
import MoonIcon from "./icons/IconMoon";
import ToDoForm from "./ToDoForm";
const ToDoHeader = ({ createToDo }) => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button>
                    <MoonIcon fill="#fff" />
                </button>
            </div>

            <ToDoForm createToDo={createToDo} />
        </header>
    );
};

export default ToDoHeader;
