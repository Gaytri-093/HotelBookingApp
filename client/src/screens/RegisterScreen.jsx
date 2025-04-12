import React, { useState } from 'react'

function RegisterScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')

    const register = (e)=>{
      if(password === cPassword){
        const user = {
            name,
            email,
            password,
            cPassword
        }
       
        console.log(user)

      }
      else{
        alert("password do not match")
      }
    }
  return ( 
    <div>
      <div className="row justify-content-center">
        <div className="col-md-5">
            <div className='divshadow'>
                <h2 className='text-center'>Register</h2>
                <input type="text" className='form-control' placeholder='Enter Your Name'
                 value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="email" className='form-control' placeholder='Enter Your Email' 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className='form-control' placeholder='Enter Your Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" className='form-control' placeholder='Confirm Password'
                value={cPassword}  onChange={(e)=>setCPassword(e.target.value)}/>

                <button className='btn btn-primary mt-3' onClick={register}>Register</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
