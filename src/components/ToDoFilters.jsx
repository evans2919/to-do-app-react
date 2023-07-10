/* eslint-disable react/prop-types */
const filterStyles = {
    all: {
        active: "text-blue-600 hover:text-gray-400",
        inactive: "text-gray-400 hover:text-blue-600",
    },
    active: {
        active: "text-blue-600 hover:text-gray-400",
        inactive: "text-gray-400 hover:text-blue-600",
    },
    completed: {
        active: "text-blue-600 hover:text-gray-400",
        inactive: "text-gray-400 hover:text-blue-600",
    },
};

const ToDoFilters = ({ toDo, changeFilter, filterToDo }) => {
  const filterButton = (filter) => {
    const isActive = filter === filterToDo;
    const buttonStyle = isActive ? filterStyles[filter].active : filterStyles[filter].inactive;

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
    <>
      {toDo.length >= 1 && (
        <section className="container mx-auto mt-4 px-4">
          <article className="flex justify-center gap-2 rounded-md bg-white px-5 py-3 text-lg font-semibold text-gray-400">
            {filterButton("all")}
            {filterButton("active")}
            {filterButton("completed")}
          </article>
        </section>
      )}
    </>
  );
};

export default ToDoFilters;