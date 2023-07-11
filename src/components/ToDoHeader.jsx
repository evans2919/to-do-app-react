/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";
import ToDoForm from "./ToDoForm";

const initialStateDarkMode =
    document.documentElement.className.includes("dark");

const ToDoHeader = ({ createToDo }) => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
             document.documentElement.classList.add("dark");
             localStorage.theme = "dark";
        } else {
            document.documentElement.classList.remove("dark");
           localStorage.theme = "light";
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-bold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon fill="#fff" />}
                </button>
            </div>

            <ToDoForm createToDo={createToDo} />
        </header>
    );
};

export default ToDoHeader;
