import React from 'react'
import { NavLink } from 'react-router-dom'

export const AdminNav = () => {

    const NavLinks = [{
        title: "Message",
        url: '/admin/message',
    },
    {
        title: "Donation",
        url: '/admin/donate',
    }
]
  return (
    <div className='h-[10vh] z-50 w-full fixed bg-[#f8f8f8] shadow-lg flex flex-row justify-start items-center'>
        <div className='h-[90%] w-[20%] font-bold text-3xl flex justify-center items-center hover:cursor-pointer'>Admin Page</div>
        <div className='h-[90%] w-[40%] flex gap-[3rem] justify-center items-center ml-auto'>
        <ul className='flex flex-row gap-12 justify-center items-center'>
                {NavLinks.map((navdata, index) => (
                    <li key={index} className='font-bold text-2xl'>
                        <NavLink key={index}
                            to={navdata.url}
                            className={({ isActive }) =>
                                isActive ? 'text-green-500' : 'hover:text-green-400'
                            }>
                            {navdata.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}


export default AdminNav
