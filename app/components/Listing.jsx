import React from 'react';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Listing ({ listing }) {
    const { title, id, description, created_at } = listing;
    return (
        <div className="border-solid">
        <Link href={`/listings/${id}`} prefetch>
                            <div className="col-span-2 max-h-12 w-full object-contain lg:col-span-1">
            <div className="font-bold">  {title}</div>
            <div className="text-sm text-gray-500"> {dayjs(created_at).fromNow()}</div>
            {description}
            </div>
        </Link>
        </div>
    );
};

