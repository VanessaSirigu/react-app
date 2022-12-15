import React from 'react'
import './style.css'

type Props = {
  id?: string
  src?: string
  alt?: string
  tot: string
  description: string
}
// ({ tot, description, src, alt }: Props)

export const Card = ({ tot, description, src, alt }: Props) => {
  return (
    <div className="card">
      <img className="image" src={src} alt={alt} />
      <div>
        <h2 className="number">{tot}</h2>
        <p className="text">{description}</p>
      </div>
    </div>
  )
}
