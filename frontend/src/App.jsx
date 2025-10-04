import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import ProductPage from './pages/ProductPage'
import Checkout from './pages/Checkout'
import AdminPanel from './pages/AdminPanel'
import WhatsAppButton from './components/WhatsAppButton'

export default function App(){ 
  const [cart,setCart]=useState([])
  const addToCart=(p)=>{ setCart(prev=>{ const found=prev.find(x=>x.id===p.id); if(found) return prev.map(x=>x.id===p.id?{...x,qty:x.qty+1}:x); return [...prev,{...p,qty:1}] }) }
  return (
    <div className='min-h-screen flex flex-col'>
      <header className='bg-white shadow'>
        <div className='container mx-auto flex items-center justify-between p-4'>
          <Link to='/' className='text-2xl font-bold' style={{color:'#1e7a3a'}}>Healthy & Sin TACC</Link>
          <nav className='space-x-4'>
            <Link to='/'>Inicio</Link>
            <Link to='/categoria/saludable'>Saludable</Link>
            <Link to='/categoria/sintacc'>Sin TACC</Link>
            <Link to='/checkout' className='ml-4'>Carrito ({cart.reduce((s,c)=>s+c.qty,0)})</Link>
          </nav>
        </div>
      </header>
      <main className='flex-1 container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart}/>}/>
          <Route path='/categoria/:id' element={<Category addToCart={addToCart}/>}/>
          <Route path='/producto/:id' element={<ProductPage addToCart={addToCart}/>}/>
          <Route path='/checkout' element={<Checkout cart={cart}/>}/>
          <Route path='/admin/*' element={<AdminPanel/>}/>
        </Routes>
      </main>
      <footer className='bg-white py-4 text-center'>© {new Date().getFullYear()} Healthy & Sin TACC</footer>
      <WhatsAppButton phone={'5491122850681'} />
    </div>
  )
}
