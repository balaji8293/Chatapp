import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const Search = () => {
    return (
        <div className='h-[10vh]'>
            <div className='px-6 py-4'>
                <form action={() => { }}>
                    <div className='flex space-x-3'>
                        <label className="input flex items-center gap-2 w-[90%]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="text" className='grow' placeholder="Search" />
                        </label>
                        <button>
                            <IoSearchSharp className='text-4xl hover:bg-gray-600 rounded-full p-2 duration-300 ' />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;
