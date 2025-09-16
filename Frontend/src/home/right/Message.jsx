import React from 'react';

const Message = () => {
    return (
        <>
            <div className='p-4'>
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-neutral bg-amber-50 text-black">
                        Hi,
                        <br />
                        I have the high ground.
                    </div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-neutral bg-amber-50 text-black">
                        Hello,
                        <br />
                        Ohh! Nice.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Message;
