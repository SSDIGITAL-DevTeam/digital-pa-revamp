"use client"

import TeamCard from "./TeamCard"

// Dummy data untuk team members
const teamMembers = [
    {
        id: 1,
        name: "Samantha Reed",
        position: "Creative Director",
        image: "/jpg/sample-gambar.jpg" // Ganti dengan path gambar yang sesuai
    },
    {
        id: 2,
        name: "Jordan Clark",
        position: "UX/UI Designer",
        image: "/jpg/sample-gambar.jpg"
    },
    {
        id: 3,
        name: "Ava Martinez",
        position: "Brand Strategist",
        image: "/jpg/sample-gambar.jpg"
    },
    {
        id: 4,
        name: "Ethan Cooper",
        position: "Marketing Manager",
        image: "/jpg/sample-gambar.jpg"
    }
]

export default function MeetOurTeam() {
    return (
        <div className="w-full max-w-7xl mx-auto px-5 md:px-10 lg:px-5">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                    MEET OUR TEAM
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Get to know the talented individuals who make our success possible
                </p>
            </div>

            {/* Team Cards Grid - 4 cards in 1 row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {teamMembers.map((member) => (
                    <TeamCard
                        key={member.id}
                        name={member.name}
                        position={member.position}
                        image={member.image}
                    />
                ))}
            </div>
        </div>
    )
}
