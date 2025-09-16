import React from 'react';

const User = () => {
    return (
        <div>
            <div className='flex space-x-4 px-4 py-3 hover:bg-slate-700 cursor-pointer'>
                <div className="avatar avatar-online avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-14 rounded-full">
                        <span className="text-xl">BS</span>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>Balaji Sanap</h1>
                    <span>balajisanap@gmail.com</span>
                </div>
            </div>
        </div>
    );
}

export default User;
