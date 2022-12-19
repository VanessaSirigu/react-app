import React from 'react'
import { Card, CardProps } from '../Card'
import './style.css'

type Props = {
  data: CardProps[]
  className?: string
}

export const CardList = ({ data, className }: Props) => {
  // const { title, subtitle, icon, id } = data
  return (
    <div className="card-container">
      {data.map((e) => {
        return (
          <Card
            title={e.title}
            subtitle={e.subtitle}
            srcImg={e.srcImg}
            className={className}
            graphCircle={e.graphCircle}
            // id="1"
          />
        )
      })}
    </div>
  )
}
