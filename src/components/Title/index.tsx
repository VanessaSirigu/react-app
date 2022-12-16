import React, { ReactNode } from 'react'
import { Text } from '../Text'
import './style.css'

type Props = {
  title: string
  subtitle?: string
}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <div>
      <Text type="h2" size="14px" bold>
        {title}
      </Text>
      {subtitle && (
        <Text type="p" size="12px">
          {subtitle}
        </Text>
      )}
    </div>
  )
}
