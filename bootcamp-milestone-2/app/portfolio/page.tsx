import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
    return (
        <main className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-8">Portfolio</h1>
                
                <div className="space-y-6">
                    <Image 
                        src="/portfolio.png" 
                        alt="Hack4Impact Starter Pack Website 1.0" 
                        width={640} 
                        height={480}
                        className="w-full h-auto rounded-lg"
                    />
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-white">
                            Hack4Impact Starter Pack Website 1.0
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            This is a website that I built using the Hack4Impact Starter Pack. {" "}
                            <Link 
                                href="https://darryljamescruz.github.io/index.html" 
                                className="text-red-400 hover:text-red-300 underline underline-offset-4 transition-colors duration-200"
                            >
                                Learn More
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}