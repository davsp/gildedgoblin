"use client";

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import Listing from '../components/Listing'

export default function Home() {
    const [listings, setListings] = useState([]);





    useEffect(() => {

        // const fetchedListings = 
        async () => {
            const { data, error } = await supabase
            .from('listings')
            .select('*').in('game_type', ['WTS','WTB']).limit(5).order('created_at', { ascending: false });
            setListings(data)
        };

        // fetchedListings()

        const handleInserts = (payload) => {
            setListings((prev) => [payload.new, ...prev])
            console.log('Change received!', payload)
        }
        supabase
        .channel('listings')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'listings' }, handleInserts)
        .subscribe()
    }, [])


return (
    <>
        <main className="flex flex-col items-center justify-between p-12">
            <div className="z-10 items-center justify-between font-mono text-sm lg:flex">
                <div className="flex flex-rows p-15">
                    <span className="font-bold">Listings</span>
                    <div className="border-5 mx-auto mt-10 grid max-w-lg grid-rows-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-rows-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-rows-5">
                        WTB
                        {
                            listings
                                .filter((listing) => listing.game_type === 'WTB')
                                .map((listing) => (
                                    <Listing listing={listing} key={listing.id} />
                                ))
                        }
                    </div>
                    <div className="border-5 mx-auto mt-10 grid max-w-lg grid-rows-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-rows-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-rows-5">
                        WTS
                        {
                            listings
                                .filter((listing) => listing.game_type === 'WTS')
                                .map((listing) => (
                                    <Listing listing={listing} key={listing.id} />
                                ))
                        }
                    </div>
                </div>
            </div>
        </main>
    </>
);
}
