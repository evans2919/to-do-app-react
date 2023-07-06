import { useState } from "react";

/* eslint-disable react/prop-types */
const ToDoForm = ({ createToDo }) => {
    const [newToDo, setNewToDo] = useState({
        title: "",
        completed: false,
    });

    const { title, completed } = newToDo;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            return alert("Please enter a title");
        }
        createToDo({
            id: Date.now(),
            ...newToDo,
            completed: completed,
        });
        setNewToDo({
            title: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewToDo({ ...newToDo, [name]: value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            action=""
            className="mt-8 flex items-center gap-2 overflow-hidden rounded-md bg-white px-5 py-3"
        >
            <span className="inline-block h-5 w-5 rounded-full border-2"></span>
            <input
                className="w-full border-none text-sm font-medium text-gray-400 outline-none"
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Create a new todo..."
            />
        </form>
    );
};

export default ToDoForm;
