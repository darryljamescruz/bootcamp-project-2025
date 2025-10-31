export default function Contact() {
    return (
        <main className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
                <p className="text-slate-300 text-lg mb-8">Contact me through the form below:</p>
                
                <form id="contact-form" className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-white font-medium">
                            Name
                        </label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Name" 
                            required 
                            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-white font-medium">
                            Email
                        </label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Email" 
                            required 
                            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-white font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            required
                            rows={6}
                            className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-200 resize-vertical"
                        ></textarea>
                    </div>

                    <button 
                        type="submit"
                        className="bg-neutral-950 hover:bg-white text-white hover:text-neutral-950 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 border border-neutral-800 hover:border-neutral-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}