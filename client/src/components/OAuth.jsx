import React from 'react'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {app} from '../firebase'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import {signInSuccess } from '../redux/user/userSlice'

export const OAuth = () => {

    const dispatch = useDispatch()
    const handelGoogleClick = async()=>{
        try{
            // dispatch(signInStart)
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            
            const result = await signInWithPopup(auth, provider)
            // console.log(result.user)
            await axios.post("http://localhost:3000/api/auth/google", result.user)
            .then((res)=> {
                console.log(res.data)
                dispatch(signInSuccess(res.data))
            })
            .catch(err => console.log(err))
        }catch(err){
            console.log('could not login with google', err)
        }
    }
  return (
   <button onClick={handelGoogleClick} type='button' className='bg-red-700 text-white rounded-lg p-3
   uppercase hover:opacity-95'>Continue with google</button>
  )
}
