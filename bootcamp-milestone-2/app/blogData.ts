interface Blog {
    title: string,
    date: string,
    description: string,
    image: string,
    imageAlt: string,
    slug: string
}

const blog: Blog[] = [
    {
        title: "Thoughts on Julian's Cafe",
        date: "2025-10-14",
        description: "It's lowkey kinda mid",
        image: "../public/julians.jpg",
        imageAlt: "Julian's Cafe",
        slug: "julians-cafe.html"
    },
    {
        title: "Tornadoes in SLO",
        date: "2025-10-14",
        description: "Tornadoes in SLO",
        image: "../public/tornado.jpg",
        imageAlt: "Tornadoes in SLO",
        slug: "tornadoes-in-slo.html"
    }
]

function renderBlogs(blogs: Blog[]): void {
    const blogContainer = document.getElementById('blog-container');
    if (!blogContainer) return;

    blogContainer.innerHTML = '';
    blogContainer.classList.add('blog-grid');

    blogs.forEach((post) => {
        const card = document.createElement('article');
        card.className = 'blog-card';

        const title = document.createElement('h2');
        title.textContent = post.title;

        const meta = document.createElement('div');
        meta.className = 'blog-meta';
        meta.textContent = new Date(post.date).toDateString();

        const img = document.createElement('img');
        img.src = post.image;
        img.alt = post.imageAlt;
        img.loading = 'lazy';
        img.referrerPolicy = 'no-referrer';
        img.onerror = () => {
            img.style.display = 'none';
        };

        const desc = document.createElement('p');
        desc.textContent = post.description;

        const link = document.createElement('a');
        link.href = post.slug;
        link.className = 'blog-link';
        link.textContent = 'Read more →';

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(meta);
        card.appendChild(desc);
        card.appendChild(link);

        blogContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderBlogs(blog);
});