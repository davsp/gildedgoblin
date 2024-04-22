import React from 'react';
import Link from 'next/link';

export default function Listing ({ listing }) {
    const { title, id, description } = listing;
    return (
        <div className="border-solid">
        <Link href={`/listings/${id}`} prefetch>
                            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div className="font-bold">  {title}</div>
            {/* <br />
            Dont need game type for now
            Game Type: {game_type}
            */}
            {description}
            </div>
        </Link>
        </div>
    );
};

