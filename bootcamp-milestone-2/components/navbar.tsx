import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-neutral-950 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="font-sans text-xl md:text-2xl font-bold mb-4 md:mb-0">
            <Link href="/">
              Darryl James Cruz
            </Link>
          </h1>
          <nav className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="/" className="hover:text-neutral-400 transition-colors duration-200">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-neutral-400 transition-colors duration-200">
              Blogs
            </Link>
            <Link href="/portfolio" className="hover:text-neutral-400 transition-colors duration-200">
              Portfolio
            </Link>
            <Link href="/resume" className="hover:text-neutral-400 transition-colors duration-200">
              Resume
            </Link>
            <Link href="/contact" className="hover:text-neutral-400 transition-colors duration-200">
              Contact Me
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}