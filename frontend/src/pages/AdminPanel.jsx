import React, {useState} from 'react'
export default function AdminPanel(){
  const [email,setEmail]=useState('admin@demo.com'), [passw,setPassw]=useState('admin123'), [token,setToken]=useState('')
  const login=async ()=>{
    try{
      const res=await fetch('/.netlify/functions/auth-login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email, password: passw})})
      if(res.ok){ const j=await res.json(); setToken(j.token); alert('Login OK') } else alert('Login failed')
    }catch(e){ alert('Error') }
  }
  return (<div className='p-6'><h2 className='text-2xl font-bold mb-4'>Admin</h2><input className='p-2 border w-full mb-2' placeholder='email' value={email} onChange={e=>setEmail(e.target.value)}/><input className='p-2 border w-full mb-2' placeholder='password' value={passw} onChange={e=>setPassw(e.target.value)}/><button onClick={login} className='btn-brand'>Login</button><div className='mt-4'>Token: <code className='break-all'>{token}</code></div></div>)
}
