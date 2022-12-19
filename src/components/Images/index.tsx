import React from 'react'
import './style.css'

type Props = {
  srcImg: string
  alt?: string
}

export const Images = ({ srcImg, alt = '' }: Props) => {
  return <img src={srcImg} alt={alt} className="image" />
}
