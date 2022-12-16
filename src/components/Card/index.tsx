import React from 'react'
import { Icon } from '../Icon/Icon'
import { Paper } from '../Paper'
import { Title } from '../Title'
import './style.css'

export type Props = {
  title: string
  subtitle?: string
  icon: string
  // id?: string
  className?: string
  graphCircle?: string
}

export const Card = ({ title, subtitle, icon, className, graphCircle }: Props) => {
  return (
    <Paper className={className}>
      <Title title={title} subtitle={subtitle} className="cards-titles" />
      <div className="line" />
      <Icon icon={icon} className="image" />
      {graphCircle && <Icon icon={graphCircle} className="image" />}
    </Paper>
  )
}
