import React, { ReactNode } from 'react'
import { Icon } from '../Icon'
import { Paper } from '../Paper'
import { Title } from '../Title'
import './style.css'

export type Props = {
  title: string
  subtitle?: string
  icon: 'string'
  // children: ReactNode
}

export const Graph = ({ title, subtitle = '', icon /* children*/ }: Props) => {
  return (
    <Paper>
      <Title title={title} subtitle={subtitle} />
      <Icon icon={icon} />
      {/* <div>{children}</div> */}
    </Paper>
  )
}
