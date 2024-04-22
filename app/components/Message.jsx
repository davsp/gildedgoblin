import React from 'react';

const Message = ({message}) => {
    const {created_at} = message;
    return (
        <div>
            <h1>{message}</h1>
            <br />
            Created at: {created_at}
        </div>
    );
};

export default Message;