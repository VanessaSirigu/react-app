import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  children: string
  bold?: boolean
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
  size?: 'small' | 'medium' | 'large'
  className?: string
  variant?: string
}

export const Text = ({
  children,
  bold,
  className,
  type = 'span',
  size = 'medium'
}: Props) => {
  const Wrapper = type
  return <Wrapper className={cn(className, size, { bold })}>{children}</Wrapper>
}
