import cn from 'classnames'
import React, { ReactNode } from 'react'
import './style.css'

type Props = {
  children: string
  size: string
  bold?: boolean
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'
}

export const Text = ({ children, size = '18px', bold, type = 'span' }: Props) => {
  const Wrapper = type
  return <Wrapper className={cn({ bold })}>{children}</Wrapper>
  // return element === 'subtitle' ? (
  //   <p className={cn('subtitle', { bold })}>{children}</p>
  // ) : (
  //   <h3 className={cn('title', { bold })}>{children}</h3>
  // )
}
