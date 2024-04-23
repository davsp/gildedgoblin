"use client";

import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabase'
import Listing from '../components/Listing'

export default function Home() {
    const [listings, setListings] = useState([])




    useEffect(() => {

        const fetchedListings = async () => {
            const { data, error } = await supabase
            .from('listings')
            .select('*').in('game_type', ['WTS','WTB']).limit(5).order('created_at', { ascending: false });
            setListings(data)
        };

        fetchedListings()

        const handleInserts = (payload) => {
            setListings((prev) => [payload.new, ...prev])
            console.log('Change received!', payload)
        }
        supabase
        .channel('listings')
        .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'listings' }, handleInserts)
        .subscribe()
    }, [supabase])


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



{/* <ul role="list" className="divide-y divide-gray-100">
{people.map((person) => (
  <li key={person.email} className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-gray-900">{person.role}</p>
      {person.lastSeen ? (
        <p className="mt-1 text-xs leading-5 text-gray-500">
          Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
        </p>
      ) : (
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">Online</p>
        </div>
      )}
    </div>
  </li>
))}
</ul> */}