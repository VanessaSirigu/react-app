import React from 'react'
import './style.css'

type Props = {
  src: string
  alt: string
}

export const CircleGraph = ({ src, alt }: Props) => {
  return <img src={src} alt={alt} className="circle-graph" />
}
