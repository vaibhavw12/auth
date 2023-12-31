import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { signInStart, signInSuccess, signInFailure, signInprogress } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { OAuth } from '../components/OAuth'

export default function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({})
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)
  // name of the slice is user in userSlice.js
  const {loading, error} = useSelector((state)=> state.user)
  

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id] : e.target.value})
    // setError('')
    dispatch(signInprogress())
  }
  const handelSubmit = async(e)=>{
    e.preventDefault()
    // setLoading(true)
    // by using redux
    dispatch(signInStart())
    try{
      const res =  await axios.post('http://localhost:3000/api/auth/signin',formData)
      // console.log(res.data)
  
      if(res.data.status === 'FAILED'){
        // setError('something went wrong')
        dispatch(signInFailure(res.data.message))
      }else{
        // setError('')
        // dispatch(signInFailure())
        dispatch(signInSuccess(res.data))
        navigate('/')
      }
    }catch(err){
      // console.log(err)
      dispatch(signInFailure(err.message))
    }
    
    // setLoading(false)
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handelSubmit} className='flex flex-col gap-4'>
        <input onChange={handleChange} type='email' placeholder='email' id='email' 
        className='bg-slate-100 p-3 rounded-lg'>
        </input>
        <input onChange={handleChange} type='password' placeholder='password' id='password' 
        className='bg-slate-100 p-3 rounded-lg'>
        </input>
        <button className='bg-slate-700 text-white p-3 rounded-lg
        uppercase hover:opacity-95 disabled:opacity-80'>{loading ? <span>loading...</span> : <span>Sign In</span>}</button>
        <OAuth></OAuth>
      </form>
      <div className='flex gap-3 mt-5'>
        <p>Dont't have an account ?</p>
        <Link to='/sign-up'>
          <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-2'>{error}</p>
    </div>
  )
}