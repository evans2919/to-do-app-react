import { useState } from "react";

/* eslint-disable react/prop-types */
const ToDoForm = ({ createToDo }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert("Please enter a title");
            return setTitle("");
        }

        createToDo(title);
        setTitle("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3 dark:bg-[#25273c]"
        >
            <span className="inline-block h-5 w-5 rounded-full border dark:border-gray-600"></span>
            <input
                className="w-full border-none font-normal text-lg text-gray-500 outline-none dark:bg-[#25273c] dark:text-gray-400"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Create a new todo..."
            />
        </form>
    );
};

export default ToDoForm;
