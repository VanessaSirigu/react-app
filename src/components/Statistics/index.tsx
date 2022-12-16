import classNames from 'classnames'
import React from 'react'
import { Icon } from '../Icon/Icon'
import { Paper } from '../Paper'
import { Title } from '../Title'
import './style.css'

export type Props = {
  icon: string
  title: string
  subtitle: string
  className?: string
}

export const Statistics = ({ title, subtitle, icon, className }: Props) => {
  return (
    <Paper className={className}>
      <Icon icon={icon} alt=" " />
      <Title title={title} subtitle={subtitle} />
    </Paper>
  )
}
