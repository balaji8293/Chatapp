import React from 'react';
import Chatuser from './Chatuser';
import Messages from './Messages';
import Type from './Type';

const Right = () => {
    return (
        <div className='w-[70%] bg-slate-900 text-amber-100'>
            <Chatuser />
            <div className='py-2 flex-balaji overflow-y-auto' style={{ maxHeight: "calc(92vh - 10vh)" }}>
                <Messages />
            </div>
            <Type />
        </div>
    );
}

export default Right;
