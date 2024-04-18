import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        This is the WTB test main page
        <br />
        <Link href="/">Back to Main Page</Link>
        <Link href="/">WTB</Link>
      </div>
    </main>
  );
}
