import { supabase } from '../utils/supabase';
import Listing from '../components/Listing';

export async function FetchListings() {
    const {data: listings} = await supabase.from('listings').select('*');

    return (
        <div>
            {listings ? listings.map((listing) => (
            <Listing listing={listing} key={listing.id} />
        )) : null}
        </div>
    )
}