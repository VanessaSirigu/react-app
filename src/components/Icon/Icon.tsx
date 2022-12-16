import React from 'react'
import './style.css'

type Props = {
  icon: string
  alt?: string
}

export const Icon = ({ icon, alt = '' }: Props) => {
  return <img src={icon} alt={alt} className="icon" />
}
