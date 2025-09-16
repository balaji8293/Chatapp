import React from 'react'
import Search from './Search'
import Users from './Users'
function Left() {
  return (
    <div className='w-[30%]  bg-slate-800 text-amber-100'>
      <h1 className='font-bold text-3xl px-6 pt-4'>Chat</h1>
      <Search />
      <hr />
      <Users />
    </div>
  )
}

export default Left