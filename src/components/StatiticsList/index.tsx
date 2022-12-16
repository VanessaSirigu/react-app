import React from 'react'
import { Statistics, Props as StatiticsProps } from '../Statistics'
import './style.css'

type Props = {
  data: StatiticsProps[]
  className?: string
}

export const StatiticsList = ({ data, className }: Props) => {
  return (
    <div className="row">
      {data.map((e) => {
        return (
          <Statistics
            className={className}
            icon={e.icon}
            title={e.title}
            subtitle={e.subtitle}
          />
        )
      })}
    </div>
  )
}
