import React from 'react'
import { Card, Props as CardProps } from '../Card'
import './style.css'

type Props = {
  data: CardProps /* & { id: string })*/[]
  className: string
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
            icon={e.icon}
            className={className}
            graphCircle={e.graphCircle}
            // id="1"
          />
        )
      })}
    </div>
  )
}
