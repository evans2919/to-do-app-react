import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
const App = () => {
    return (
        <>
            <div className="min-h-screen  bg-gray-100 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-top bg-no-repeat">
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
                            className="w-full border-none text-sm text-gray-400 font-medium outline-none"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </form>
                </header>
                <main className="container mx-auto mt-4 px-4">
                    <div className="overflow-hidden rounded-md [&>article]:px-5 [&>article]:py-3 ">
                        <article className="flex justify-between border-b-2 border-b-gray-200 bg-white">
                            <div className="flex items-center gap-2">
                                <button className="inline-block h-5 w-5 rounded-full border-2"></button>
                                <p className="text-sm font-semibold text-gray-600">
                                    Recoger al perro
                                </p>
                            </div>
                            <button>
                                <CrossIcon />
                            </button>
                        </article>{" "}
                        <article className="flex justify-between  bg-white text-gray-400 font-medium text-sm">
                            <span>5 items left</span>
                            <button>
                                Clear completed
                            </button>
                        </article>
                    </div>
                </main>
                <section className="container mx-auto mt-4 px-4">
                    <article className="flex justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-gray-400">
                        <button className="text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Completed
                        </button>
                    </article>
                </section>

                <section className="container mx-auto mt-6 px-4">
                    <article className="px-5 py-3 font-semibold text-gray-400 ">
                        <p className="text-center">
                            Drag and drop to reorder list
                        </p>
                    </article>
                </section>
            </div>
        </>
    );
};

export default App;
