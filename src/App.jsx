const App = () => {
    return (
        <>
            <div className="bg-[url('./assets/images/bg-mobile-light.jpg')]  bg-contain bg-top bg-no-repeat bg-gray-50 min-h-screen">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                            Todo
                        </h1>
                        <button>Luna</button>
                    </div>

                    <form
                        action=""
                        className="overflow-hidden rounded bg-white p-3 flex gap-2 items-center mt-8"
                    >
                        <span className="rounded-full border-2 w-5 h-5 inline-block"></span>
                        <input
                            className="border-none w-full text-gray-400 outline-none"
                            type="text"
                            placeholder="Create a new todo..."
                        />
                    </form>
                </header>
                <main className="container mx-auto px-4 mt-8">
                    <article>
                        <button>Circulo</button>
                        <p>Complete</p>
                        <button>equis</button>
                    </article>
                    <article>
                        <button>Circulo</button>
                        <p>Complete</p>
                        <button>equis</button>
                    </article>
                    <article>
                        <button>Circulo</button>
                        <p>Complete</p>
                        <button>equis</button>
                    </article>
                    <section>
                        <span>5 items left</span>
                        <button>Clear completed</button>
                    </section>
                </main>
                <section className="container mx-auto px-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>
                <p className="text-center">Drag and drop to reorder list</p>
            </div>
        </>
    );
};

export default App;
