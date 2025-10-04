import React from 'react'
export default function ProductCard({product,onAdd}){
  return (
    <div className='bg-white rounded shadow p-4'>
      <div className='h-40 w-full bg-gray-200 rounded mb-2 flex items-center justify-center'>Imagen</div>
      <h3 className='mt-2 font-semibold'>{product.name}</h3>
      <p className='text-sm text-gray-600'>{product.shortDesc}</p>
      <div className='mt-3 flex items-center justify-between'>
        <span className='font-bold'>${product.price}</span>
        <button onClick={()=>onAdd(product)} className='btn-accent'>Agregar</button>
      </div>
    </div>
  )
}
