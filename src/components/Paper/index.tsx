import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  children: ReactNode
  shadow?: boolean
  rounded?: boolean
  className?: string
}

export const Paper = ({ children, className, shadow = true, rounded = true }: Props) => {
  return <div className={cn('paper', className, { shadow, rounded })}>{children}</div>
}
