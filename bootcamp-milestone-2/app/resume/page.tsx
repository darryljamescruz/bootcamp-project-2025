export default function Resume() {
    return (
        <main className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="pb-6 mb-8">
                    <h1 className=" text-4xl font-bold text-white mb-4">Resume</h1>
                    <a 
                        href="resume.pdf" 
                        download 
                        className="inline-block bg-neutral-950 hover:bg-neutral-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 border border-neutral-800"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Education Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Education
                    </h2>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">
                            Bachelor of Science in Computer Science
                        </h3>
                        <p className="text-slate-300 mt-1">
                            California Polytechnic State University, San Luis Obispo | Expected Graduation: June 2026
                        </p>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Experience
                    </h2>
                    <div className="space-y-6 ml-4">
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Service Desk Student Assistant Lead
                            </h3>
                            <p className="text-slate-300 mt-1 font-medium">May 2023 – Present</p>
                            <p className="text-slate-400 mt-2">
                                Led front-line support for students and staff; resolved tickets and coordinated training.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white">
                                Frontend Engineer Intern
                            </h3>
                            <p className="text-slate-300 mt-1 font-medium">June 2025 – September 2025</p>
                            <p className="text-slate-400 mt-2">
                                Built and refined UI components, improved accessibility, and fixed customer-facing bugs.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Projects
                    </h2>
                    <div className="ml-4">
                        <h3 className="text-xl font-semibold text-white">
                            Personal Website
                        </h3>
                        <p className="text-slate-300 mt-1 font-medium">2025</p>
                        <p className="text-slate-400 mt-2">
                            Designed and built this responsive personal website with semantic HTML and CSS.
                        </p>
                    </div>
                </section>

                {/* Coursework Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Coursework
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4">
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Data Structures and Algorithms
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Object-Oriented Programming
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Design and Analysis of Algorithms
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Software Engineering I & II
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Systems Programming
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Dynamic Web Development
                        </li>
                        <li className="text-slate-300 flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Mobile Application Development
                        </li>
                    </ul>
                </section>

                {/* Skills Section */}
                <section className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Skills
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ml-4 text-slate-300">
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Python
                        </li>
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            Java
                        </li>
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            C
                        </li>
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            JavaScript
                        </li>
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            HTML
                        </li>
                        <li className="flex items-start">
                            <span className="text-zinc-400 mr-2">•</span>
                            CSS
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    );
}   
