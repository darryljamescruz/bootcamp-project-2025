import BlogPreview from '@/components/blogPreview';
import blogs from '@/app/blogData';

export default function Blogs() {
    return (
        <main className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
                <p className="text-slate-300 text-lg mb-8">
                    Hello World! This is my blog.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogs.map((blog, index) => (
                        <BlogPreview key={index} {...blog} />
                    ))}
                </div>
            </div>
        </main>
    );
}