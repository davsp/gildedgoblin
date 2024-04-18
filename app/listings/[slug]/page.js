import Image from "next/image";
import Link from "next/link";
import Listing from '../../components/Listing';

export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is the slug test for {params.slug}
        <br />
        <Link href="/">Back to Main Page</Link>
        <Link href="/wts">WTS</Link>
        <Listing />
      </div>
    </main>
  );
}
