import React from 'react';
import { TbLogout2 } from "react-icons/tb";


const Logout = () => {
    return (
        <div className='w-[5%] bg-slate-900 text-amber-100 flex flex-col justify-end'>
            <div className='p-3'>
                <form action={() => { }}>
                    <div className='flex space-x-3'>
                        <button>
                            <TbLogout2   className='text-4xl hover:bg-gray-600 rounded-lg p-2 duration-300 ' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Logout;
