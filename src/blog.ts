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
        image: "skyline.jpg",
        imageAlt: "Julian's Cafe",
        slug: "/"
    },
    {
        title: "Tornadoes in SLO",
        date: "2025-10-14",
        description: "Tornadoes in SLO",
        image: "tornadoes.jpg",
        imageAlt: "Tornadoes in SLO",
        slug: "/"
    }
]