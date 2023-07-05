import ToDoHeader from "./components/ToDoHeader";
import ToDoBody from "./components/ToDoBody";
import ToDoFilters from "./components/ToDoFilters";
import ToDoFooter from "./components/ToDoFooter";
import { useState } from "react";

const initialStateToDo = [
    {
        id: 1,
        title: "Recoger al perro",
        state: true,
    },
    {
        id: 2,
        title: "Recoger al perro",
        state: false,
    },
    {
        id: 3,
        title: "Recoger al perro",
        state: true,
    }

]

const App = () => {
    const [toDo, setToDo] = useState(initialStateToDo);





    return (
        <>
            <div className="min-h-screen  bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat">
                <ToDoHeader />
                <ToDoBody toDo={toDo} />
                <ToDoFilters />
                <ToDoFooter />
            </div>
        </>
    );
};

export default App;