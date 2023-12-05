import React from 'react'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {app} from '../firebase'

export const OAuth = () => {

    const handelGoogleClick = async()=>{
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            
            const result = await signInWithPopup(auth, provider)
            console.log(result)
        }catch(err){
            console.log('could not login with google', err)
        }
    }
  return (
   <button onClick={handelGoogleClick} type='button' className='bg-red-700 text-white rounded-lg p-3
   uppercase hover:opacity-95'>Continue with google</button>
  )
}
