import React from 'react';
import Message from './Message';

const Messages = () => {
    return (
        <>
        <div style={{minHeight: "calc(92vh - 10vh)"}} className=''>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />

        </div>
        </>
    );
}

export default Messages;
