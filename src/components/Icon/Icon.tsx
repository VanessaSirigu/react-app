import React from 'react'
import './style.css'

type Props = {
  icon: string
  alt?: string
  className?: string
}

export const Icon = ({ icon, alt = '', className }: Props) => {
  return <img src={icon} alt={alt} className={className} />
}
