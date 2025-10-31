import Image from 'next/image';
import Link from 'next/link';
import type { Blog } from '@/app/blogData';

export default function BlogPreview({ title, date, description, image, imageAlt, slug }: Blog) {
    return (
        <article className="space-y-4">
            <div className="rounded-lg overflow-hidden">
                <Image 
                    src={image} 
                    alt={imageAlt} 
                    width={640} 
                    height={480}
                    className="w-full h-auto"
                />
            </div>
            <h2 className="text-2xl font-semibold text-white">
                {title}
            </h2>
            <p className="text-slate-400 text-sm">
                {new Date(date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                })}
            </p>
            <p className="text-slate-300 leading-relaxed">
                {description}
            </p>
            <Link 
                href={`/blogs/${slug}`}
                className="inline-block text-red-400 hover:text-red-300 transition-colors duration-200"
            >
                Read more →
            </Link>
        </article>
    );
}

