import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  shadow?: boolean
  rounded?: boolean
  children: ReactNode
}

export const Paper = ({ children, rounded = true, shadow = true }: Props) => {
  return <div className={cn('paper', { shadow, rounded })}>{children}</div>
}
