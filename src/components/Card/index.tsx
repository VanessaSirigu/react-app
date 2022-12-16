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
}

export const Card = ({ title, subtitle, icon, className }: Props) => {
  // passa  il titolo, la linea orizzontale
  return (
    <Paper className={className}>
      <Title title={title} subtitle={subtitle} />
      <Icon icon={icon} />
    </Paper>
  )
}
