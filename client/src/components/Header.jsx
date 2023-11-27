import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold'>Auth App</h1>
            <ul className='flex gap-4'>
                <NavLink to='/' style={({ isActive }) => ({
                                color: isActive
                                    ? "gray"
                                    : "black",
                            })}>
                    <li>Home</li>
                </NavLink>
                <NavLink to='/about' style={({ isActive }) => ({
                                color: isActive
                                    ? "gray"
                                    : "black",
                            })}>
                    <li>About</li>
                </NavLink>
                <NavLink to='/sign-in' style={({ isActive }) => ({
                                color: isActive
                                    ? "gray"
                                    : "black",
                            })}>
                    <li>Sign In</li>
                </NavLink>
                
            </ul>
        </div>
    </div>
  )
}
