export interface Blog {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    content: string[];
}

const blogs: Blog[] = [
    {
        title: "Thoughts on Julian's Cafe",
        date: "2025-10-14",
        description: "It's lowkey kinda mid",
        image: "/julians.jpg",
        imageAlt: "Julian's Cafe",
        slug: "julians-cafe",
        content: [
            "It's lowkey kinda mid. But here's a longer blurb to simulate content.",
            "I've been trying a few of their drinks, but for some reason the coffee has not been hitting like it should. Perhaps its just me, but I'd like the coffee to taste better."
        ]
    },
    {
        title: "Tornadoes in SLO",
        date: "2025-10-14",
        description: "Tornadoes in SLO",
        image: "/tornado.jpg",
        imageAlt: "Tornadoes in SLO",
        slug: "tornadoes-in-slo",
        content: [
            "Wild weather! A longer paragraph to simulate real content.",
            "Can't believe how I woke up to a tornado warning at 12 am. The weather has been so weird lately, and a tornado warning happening in the central coast was not on my 2025 bingo card. Life moves on!"
        ]
    }
];

export default blogs;
