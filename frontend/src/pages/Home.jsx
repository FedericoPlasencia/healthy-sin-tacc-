import React from 'react'
import ProductCard from '../components/ProductCard'
export default function Home({addToCart}){
  const sample=[{id:1,name:'Ensalada de Quinoa',price:1200,shortDesc:'Quinoa, tomate, hojas',image:''},{id:2,name:'Pan Sin TACC',price:800,shortDesc:'Pan artesanal sin gluten',image:''}]
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6' style={{color:'#1e7a3a'}}>Productos destacados</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {sample.map(p=> <ProductCard key={p.id} product={p} onAdd={addToCart||(()=>{})} />)}
      </div>
    </div>
  )
}
