import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">hello world!</h1>
        
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image 
              src="/skyline.jpg" 
              alt="random skyline image" 
              width={640} 
              height={480}
              className="w-full h-auto"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hello! My name is Darryl James Cruz. I am a <strong className="text-white font-semibold">fourth-year</strong> Computer Science student at California Polytechnic State University, San Luis Obispo.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I am super passionate about becoming a future <strong className="text-white font-semibold">Software Engineer</strong> and I love to learn new things about technology. In my free time, I enjoy playing video games, going to the Pad (when I am not busy), and I love watching new tv shows when I can.
            </p>
          </div>
        </div>
      </div>
    </main>
  ) 
}
