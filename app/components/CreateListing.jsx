import { useState } from 'react';
import { supabase } from '../utils/supabase'; // Assuming you have a supabase configuration file

const CreateListing = ({ game_id }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [listingType, setListingType] = useState('WTB');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const { data, error } = await supabase
                .from('listings')
                .insert([{ title, description, game_id, game_type: listingType}]);

            if (error) {
                throw new Error(error.message);
            }

            console.log('Listing created:', data);
            // Do something with the created listing data

            // Reset form fields
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error creating listing:', error);
            // Handle error
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <div>
                <label>
                    <input
                        type="radio"
                        name="listingType"
                        value="WTB"
                        checked={listingType === 'WTB'}
                        onChange={(e) => setListingType(e.target.value)}
                    />
                    WTB
                </label>
                <label>
                    <input
                        type="radio"
                        name="listingType"
                        value="WTS"
                        checked={listingType === 'WTS'}
                        onChange={(e) => setListingType(e.target.value)}
                    />
                    WTS
                </label>
                <label>
                    <input
                        type="radio"
                        name="listingType"
                        value="ISO"
                        checked={listingType === 'ISO'}
                        onChange={(e) => setListingType(e.target.value)}
                    />
                    ISO
                </label>
            </div>
            <button type="submit">Create Listing</button>
        </form>
    );
};

export default CreateListing;