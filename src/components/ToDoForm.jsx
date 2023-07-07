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
            className="mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full border-none text-lg font-medium text-gray-400 outline-none"
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
