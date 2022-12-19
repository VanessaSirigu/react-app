import React from 'react'
import './style.css'

type Props = {
  points: string[]
}

export const IconPoints = ({ points }: Props) => {
  return (
    <div className="points">
      {points.map((e) => (
        <div className="point" />
      ))}
    </div>
  )
}
