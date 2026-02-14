interface Properties {
    name: string;
    location: string;
    rent: number;
    img: string;
    beds: number;
    baths: number;
}

export const properties: Properties[] = [
    {
        name: "Modern Apartment",
        location: "New York, NY",
        rent: 2500,
        img: "https://source.unsplash.com/random/400x300?apartment",
        beds: 2,
        baths: 1,
    },
    {
        name: "Cozy Cottage",
        location: "Portland, OR",
        rent: 1800,
        img: "https://source.unsplash.com/random/400x300?cottage",
        beds: 3,
        baths: 2,
    },
    {
        name: "Luxury Condo",
        location: "Miami, FL",
        rent: 3500,
        img: "https://source.unsplash.com/random/400x300?condo",
        beds: 2,
        baths: 2,
    },
    {
        name: "Suburban House",
        location: "Austin, TX",
        rent: 2200,
        img: "https://source.unsplash.com/random/400x300?house",
        beds: 4,
        baths: 3,
    },
    {
        name: "Downtown Loft",
        location: "Chicago, IL",
        rent: 3000,
        img: "https://source.unsplash.com/random/400x300?loft",
        beds: 1,
        baths: 1,
    },
    {
        name: "Beachfront Villa",
        location: "Los Angeles, CA",
        rent: 5000,
        img: "https://source.unsplash.com/random/400x300?villa",
        beds: 5,
        baths: 4,
    },
    {
        name: "Rustic Farmhouse",
        location: "Nashville, TN",
        rent: 2000,
        img: "https://source.unsplash.com/random/400x300?farmhouse",
        beds: 3,
        baths: 2,
    }
];