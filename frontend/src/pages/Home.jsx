import React from 'react'

export default function Home() {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold" style={{ color: '#1e7a3a' }}>
        Healthy Sin TACC
      </h1>
      <p className="mt-4">Comida saludable y sin TACC.</p>
      <img
        src="/images/ensalada.jpg"
        alt="Plato saludable sin TACC"
        className="mx-auto mt-6 rounded-2xl shadow-lg w-80"
      />
    </div>
  )
}
