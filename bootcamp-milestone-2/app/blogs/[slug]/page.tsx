import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogs from '@/app/blogData';

// Generate static paths for all blog posts
export function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    
    // Find the blog post by slug
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-neutral-950 py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* Back to Blog Main Page link */}
                <Link 
                    href="/blogs"
                    className="inline-block text-red-400 hover:text-red-300 transition-colors duration-200 mb-8"
                >
                    ← Back to Blog
                </Link>

                {/* Blog Title */}
                <h1 className="text-4xl font-bold text-white mb-4">
                    {blog.title}
                </h1>

                {/* Posted Date */}
                <p className="text-slate-400 text-sm mb-8">
                    Posted: {new Date(blog.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                    })}
                </p>

                {/* Blog Image */}
                <div className="rounded-lg overflow-hidden mb-8">
                    <Image 
                        src={blog.image} 
                        alt={blog.imageAlt} 
                        width={640} 
                        height={480}
                        className="w-full h-auto"
                    />
                </div>

                {/* Blog Content */}
                <div className="space-y-4">
                    {blog.content.map((paragraph, index) => (
                        <p key={index} className="text-slate-300 text-lg leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </main>
    );
}

