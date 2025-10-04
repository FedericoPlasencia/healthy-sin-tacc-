import React from 'react'
export default function Checkout({cart}){ return (<div className='p-6'><h1 className='text-3xl'>Checkout</h1><pre>{JSON.stringify(cart,null,2)}</pre></div>) }
