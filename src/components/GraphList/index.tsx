import React, { ReactNode } from 'react'
import { Graph, Props as GraphProps } from '../Graph'
import './style.css'

export type Props = {
  title: string
  subtitle?: string
  // children: ReactNode
  // data: GraphProps[]
}

export const GraphList = ({ title, subtitle = '' /* children*/ }: Props) => {
  return (
    <div>
      {/* {data.map((e) => (
        <Graph title={title} subtitle={subtitle} icon={e.icon} />
      ))} */}
      {/* {children} */}
      {/* </Graph> */}
    </div>
  )
}
