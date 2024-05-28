import Link from "next/link";
import { supabase } from '../utils/supabase';


// {params} - removed temporarily
export default async function Page() {

  // pull categories without cache to ensure we get the latest data
  // @TODO: Figure out to how to transfer to redis cache
  const { data: games } = await supabase.from('games').select('*');


  return (
      <main className="flex flex-col items-center p-24">
    <Link href="/">Back to Main Page</Link>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <br />
        {games.map((game) => (
          <div key={game.id}>
            <Link href={`/games/${game.id}`}>{game.name}</Link><br />
            {game.category}
          </div>
        ))}

        <br />
      </div>
    </main>
  );
}