import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function SignUp() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id] : e.target.value})
    setError('')
  }
  const handelSubmit = async(e)=>{
    e.preventDefault()
    setLoading(true)
    const res =  await axios.post('http://localhost:3000/api/auth/signup',formData)
    if(res.data.status === 'FAILED'){
      setError('something went wrong')
    }else{
      navigate('/sign-in')
      setError('')
    }
    setLoading(false)
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type='text' placeholder='username' id='username' 
        className='bg-slate-100 p-3 rounded-lg'>
        </input>
        <input onChange={handleChange} type='email' placeholder='email' id='email' 
        className='bg-slate-100 p-3 rounded-lg'>
        </input>
        <input onChange={handleChange} type='password' placeholder='password' id='password' 
        className='bg-slate-100 p-3 rounded-lg'>
        </input>
        <button className='bg-slate-700 text-white p-3 rounded-lg
        uppercase hover:opacity-95 disabled:opacity-80'>{loading ? <span>loading...</span> : <span>Sign Up</span>}</button>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Already have an account ?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-2'>{error}</p>
    </div>
  )
}

