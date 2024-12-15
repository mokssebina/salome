import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'



const Header = ({day, setDay}) => {
  return (
    <div className={`relative w-11/12 md:w-[600px] h-16 mx-auto flex flex-row ${day? 'bg-[#cee5f0]' : 'bg-[#283038]'} p-1 rounded-lg`}>
        <div style={{marginLeft: '20%'}} className={`header-logo w-3/5 h-full ${day? 'text-gray-900' : 'text-gray-50'} py-1 mx auto items-center text-center`}>
          <p className='relative text-3xl'>happy birthday</p>
        </div>
        {day ?
        <button onClick={setDay} className={`absolute w-14 h-14 hover:bg-[#79c9f2] text-gray-900 rounded-md cursor-pointer p-4 right-1`}>
            <MoonIcon />
        </button>
        :
        <button onClick={setDay} className='absolute w-14 h-14 hover:bg-[#0B1929] text-gray-50 rounded-md cursor-pointer p-4 right-1'>
            <SunIcon />
        </button>
        }
    </div>
  )
}

export default Header