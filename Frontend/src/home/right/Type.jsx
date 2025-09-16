import React from 'react';
import { IoMdSend } from "react-icons/io";
const Type = () => {
    return (
        <>
            <div className='flex space-x-3 h-[8vh] bg-slate-800 py-3 px-4'>
                <div className='w-[70%]'>
                    <input type="text" placeholder="Type here" className="input w-full p-5 rounded-xl" />
                </div>
                <button className='text-2xl'>
                    <IoMdSend  />
                </button>

            </div>
        </>
    );
}

export default Type;
