import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  shadow?: boolean
  rounded?: boolean
  children: ReactNode
  className?: string
}

export const Paper = ({ children, rounded = true, shadow = true, className }: Props) => {
  return <div className={cn('paper', className, { shadow, rounded })}>{children}</div>
}
