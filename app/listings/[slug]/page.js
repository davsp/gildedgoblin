import Link from "next/link";
import { supabase } from '../../utils/supabase';


export default async function Page({ params }) {
  const { data: listing } = await supabase.from('listings').select('*, games (name) ').eq('id', params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <br />
        JSON: {JSON.stringify(listing)}
        Game: {listing[0] && JSON.stringify(listing[0].games.name)}
        <Link href="/">Back to Main Page</Link>
      </div>
    </main>
  );
}