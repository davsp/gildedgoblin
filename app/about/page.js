import Link from "next/link";

// {params} - removed temporarily
export default async function Page() {


  return (
      <main className="flex flex-col items-center p-24">
    <Link href="/">This is the About Page</Link>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <br />
        <br />
      </div>
    </main>
  );
}