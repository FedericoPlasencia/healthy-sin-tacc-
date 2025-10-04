import React from 'react'
export default function WhatsAppButton({phone}){
  const message = encodeURIComponent('Hola! Tengo una consulta sobre un producto')
  return (
    <a href={`https://wa.me/${phone}?text=${message}`} target='_blank' rel='noreferrer' className='fixed bottom-6 right-6 z-50'>
      <div className='p-3 rounded-full shadow-lg' style={{background:'#25D366', color:'white'}}>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 12.79A9 9 0 11 11.21 3 9 9 0 0121 12.79z'/>
        </svg>
      </div>
    </a>
  )
}
