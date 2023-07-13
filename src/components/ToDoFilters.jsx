/* eslint-disable react/prop-types */
const filterStyles = {
    active: "text-blue-500",
    inactive:
        "text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 dark:text-gray-500",
};

const ToDoFilters = ({ changeFilter, filterToDo }) => {
    const filterButton = (filter) => {
        const isActive = filter === filterToDo;
        const buttonStyle = isActive
            ? filterStyles.active
            : filterStyles.inactive;

        return (
            <button
                className={buttonStyle}
                onClick={() => changeFilter(filter)}
            >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
        );
    };

    return (
        <section className="container mx-auto mt-4 justify-center px-4 lg:mt-0 lg:flex lg:px-0">
            <article className="flex justify-center gap-5 rounded-md bg-white px-5 py-3 text-lg font-bold text-gray-500 dark:bg-[#25273c] lg:px-0 lg:py-0 lg:text-[16px]">
                {filterButton("all")}
                {filterButton("active")}
                {filterButton("completed")}
            </article>
        </section>
    );
};

export default ToDoFilters;
