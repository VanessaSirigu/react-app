import React, { ReactNode } from 'react'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  subtitle?: string
  className?: string
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div>
      <Text type="h2" className={`${className} title`} bold>
        {title}
      </Text>
      {subtitle && (
        <Text type="p" className={`${className} subtitle`}>
          {subtitle}
        </Text>
      )}
    </div>
  )
}
