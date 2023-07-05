import MoonIcon from "./icons/MoonIcon";
const ToDoHeader = () => {
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

            <form
                action=""
                className="mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3"
            >
                <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                <input
                    className="w-full border-none text-sm font-medium text-gray-400 outline-none"
                    type="text"
                    placeholder="Create a new todo..."
                />
            </form>
        </header>
    );
};

export default ToDoHeader;
