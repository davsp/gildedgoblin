import Link from "next/link";
import Listing from '../../components/Listing';
import { supabase } from '../../utils/supabase';


export default async function Page({ params }) {
  const { data: listing } = await supabase.from('listings').select('*, games (name) ').eq('id', params.slug).eq('game_type', 'WTS');

  const { games } = listing;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is the slug test for {params.slug}

        <br />
        JSON: {JSON.stringify(listing)}
        Game: {JSON.stringify(listing[0].games.name)}
        <Link href="/">Back to Main Page</Link>
        <Link href="/wts">WTS</Link>
      </div>
    </main>
  );
}
