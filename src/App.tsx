import './App.css'

function App() {
  return (
    <>
        <header className="flex p-12 items-center h-14 bg-white bg-opacity-80">
            <h2 className="text text-xl font-medium animate-[fadeintopnav_1s_backwards] transition-all duration-500">Steve Portofolio</h2>
            <nav className='flex flex-row ml-auto gap-2 p-2'>
                <a className="ml-3 text-gray-500 animate-[fadeintopnav_1s_backwards] transition-all duration-500" target="_blank" href="https://www.linkedin.com/in/steve-wang-a74b225a/" >
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                         stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
            </nav>
        </header>
        <main className="flex xs:h-[calc(100vh_-_96px)] justify-center items-center">
            <section className="text-gray-600 body-font -translate-y-14 animate-[fadeintopmain_1s_0.2s_backwards] transition-all duration-500">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-6xl text-4xl font-medium title-font text-gray-900 mb-4">Frontend Work
                            Demo</h1>
                        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"></p>
                        <div className="flex mt-6 justify-center">
                            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-wrap w-full gap-4 space-x-6 xs:-m-4 xs:flex-nowrap -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="/personal-web/socialeditor.png"
                                    className="object-cover"
                                    alt="SocialEditor"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Social Editor</h2>
                                <p>Web design for social editor</p>
                                <div className="card-actions justify-end">
                                    <a className="mt-3 text-indigo-500 inline-flex items-center" href="#" target="_blank">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="/personal-web/evento.png"
                                    className="object-cover"
                                    alt="Evento"/>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Event Artist Finder</h2>
                                <p>Web design for concert artist</p>
                                <div className="card-actions justify-end">
                                    <a className="mt-3 text-indigo-500 inline-flex items-center" href="#" target="_blank">Learn More
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                             stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                             viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer className="flex"></footer>
    </>
  )
}

export default App
