import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
export default function App(){ return (<div><nav className='p-4 bg-green-600 text-white'><Link to='/'>Inicio</Link></nav><Routes><Route path='/' element={<Home/>}/></Routes></div>) }
