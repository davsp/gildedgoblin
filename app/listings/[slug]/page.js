import Image from "next/image";
import Link from "next/link";
import Listing from '../../components/Listing';
import { supabase } from '../../utils/supabase';

export default async function Page({ params }) {
  const listing = await supabase.from('listings').select('*').eq('id', params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is the slug test for {params.slug}
        <br />
        Listing: {listing.data[0].title}
        <Link href="/">Back to Main Page</Link>
        <Link href="/wts">WTS</Link>
      </div>
    </main>
  );
}

