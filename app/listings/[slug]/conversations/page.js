import Message from '../../../components/Message';

const Conversations = () => {
    const messages = ['Hello', 'How are you?', 'Goodbye'];

    return (
        <div>
            <h1>Conversations</h1>
            <ul>
                {messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))}
            </ul>
        </div>
    );
};

export default Conversations;