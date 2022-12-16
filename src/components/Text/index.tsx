import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  children: string
  bold?: boolean
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  className?: string
}

export const Text = ({ children, bold, type = 'span', className }: Props) => {
  const Wrapper = type
  return <Wrapper className={cn(className, { bold })}>{children}</Wrapper>
}
