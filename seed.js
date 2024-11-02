// seed.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const main = async () => {
    const products = [
        {
            id: 1,
            name: 'Gadget 1',
            price: '$19.99',
            image: 'https://ik.imagekit.io/vishweish05/SaiBuys/IMG-20240816-WA0002.jpg?updatedAt=1723795310836',
            description: 'A great gadget for all your needs.',
            images: [
                'https://ik.imagekit.io/vishweish05/SaiBuys/IMG-20240816-WA0001.jpg?updatedAt=1723795279737',
                'https://ik.imagekit.io/vishweish05/SaiBuys/IMG-20240816-WA0002.jpg?updatedAt=1723795310836',
            ],
            videos: [
                'https://ik.imagekit.io/vishweish05/SaiBuys/VID-20240816-WA0002.mp4?updatedAt=1723795311925',
            ],
        },
        {
            id: 2,
            name: 'Pooja Product 1',
            price: '$9.99',
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF',
            description: 'Essential pooja product for your rituals.',
            images: [
                'https://via.placeholder.com/600x400',
                'https://via.placeholder.com/600x400/00FF00/808080',
            ],
            videos: [
                'https://www.w3schools.com/html/mov_bbb.mp4',
            ],
        },
        {
            id: 3,
            name: 'essentials',
            price: '$29.99',
            image: 'https://via.placeholder.com/150/00FF00/FFFFFF',
            description: 'Must-have home essential for daily use.',
            images: [
                'https://via.placeholder.com/600x400',
                'https://via.placeholder.com/600x400/FF0000/808080',
            ],
            videos: [
                'https://www.w3schools.com/html/mov_bbb.mp4',
            ],
        },
        {
            id: 4,
            name: 'Pooja Product 1',
            price: '$9.99',
            image: 'https://via.placeholder.com/150/FF0000/FFFFFF',
            description: 'Essential pooja product for your rituals.',
            images: [
                'https://via.placeholder.com/600x400',
                'https://via.placeholder.com/600x400/00FF00/808080',
            ],
            videos: [
                'https://www.w3schools.com/html/mov_bbb.mp4',
            ],
        },
        // Add more products as needed
    ];

    // Insert the products into the database
    for (const product of products) {
        await prisma.product.create({
            data: product,
        });
    }

    console.log('Seeded products successfully!');
};

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
