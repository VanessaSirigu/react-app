import React from 'react'
import { Statistic, Props as StatiticsProps } from '../Statistic'
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
          <Statistic
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
