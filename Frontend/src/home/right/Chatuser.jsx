import React from 'react';

const Chatuser = () => {
    return (
        <>
            <div className='flex h-[10vh] space-x-4 p-2 bg-gray-800 hover:bg-gray-700 duration-500'>
                <div className="avatar avatar-online">
                    <div className="w-14 rounded-full">
                        <img src="https://avatars.githubusercontent.com/u/59165823?v=4" />
                    </div>
                </div>
                <div>
                    <h1 className='text-xl'>Balaji Sanap</h1>
                    <span>Online</span>
                </div>
            </div>
        </>
    );
}

export default Chatuser;
