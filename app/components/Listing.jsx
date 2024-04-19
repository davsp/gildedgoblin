import React from 'react';
import Link from 'next/link';

export default function Listing ({ listing }) {
    const { game_type, title, id, description } = listing;
    return (
        <Link href={`/listings/${id}`}>
            Title:  {title}
            <br />
            Game Type: {game_type}
            <br />
            Description: {description}
        </Link>
    );
};


