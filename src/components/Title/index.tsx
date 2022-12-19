import cn from 'classnames'
import React, { ReactNode } from 'react'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large'
}

export const Title = ({ title, subtitle, size = 'medium' }: Props) => {
  return (
    <div className={cn('titles')}>
      <Text type="h2" bold size={size} className="title">
        {title}
      </Text>
      {subtitle && (
        <Text type="p" size={size} className="subtitle">
          {subtitle}
        </Text>
      )}
    </div>
  )
}
