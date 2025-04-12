import React from 'react'
import { useState } from 'react';
function LoginScreen() {
     
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('')
        
    
        const login = (e)=>{
          
            const user = {
               
                email,
                password,
                
            }
           
            console.log(user)
    
          
        }
  return (
    <div>
       <div className="row justify-content-center">
        <div className="col-md-5">
            <div className='divshadow'>
                <h2 className='text-center'>Login</h2>
                
                <input type="email" className='form-control' placeholder='Enter Your Email' 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" className='form-control' placeholder='Enter Your Password' 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                

                <button className='btn btn-primary mt-3' onClick={login}>login</button>
            </div>

        </div>
      </div>
    </div>
  )
}

export default LoginScreen
