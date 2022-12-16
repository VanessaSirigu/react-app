import React, { ReactNode } from 'react'
import { Title } from '../Title'
import './style.css'

type Props = {
  title: string
  subtitle?: string
  children: ReactNode
}

export const GraphCard = ({ title, subtitle = '', children }: Props) => {
  return (
    <div>
      <Title title={title} subtitle={subtitle} />
      <div>{children}</div>
    </div>
  )

  // export const GraphCard = ({ title, subtitle, src, alt, typeOfChart }: Props) => {
  //   return (
  //     <div>
  //       {typeOfChart === 'circle' && <CircleGraph src={src} alt={alt} />}
  //       {typeOfChart === 'linear' && <LinearGraph src={src} alt={alt} />}
  //       <Title title={title} subtitle={subtitle} />
  //     </div>
  //   )
}
