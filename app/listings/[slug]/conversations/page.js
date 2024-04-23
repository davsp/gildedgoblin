import Message from '../../../components/Message';
import { supabase } from '@/app/utils/supabase';

const Conversations = () => {
    const conversations = supabase.from('conversations');

    return (
        <div>
            <h1>Conversations</h1>
            JSON: {JSON.stringify(conversations)}
            <ul>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </ul>
        </div>
    );
};

export default Conversations;