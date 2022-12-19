import cn from 'classnames'
import { IconPoints } from '../IconPoints'
import { Paper } from '../Paper'
import { StatisticContenent } from '../StatisticsContenent'

import './style.css'

export type Props = {
  icon: string
  title: string
  subtitle: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

export const Statistic = ({ title, subtitle, icon, className }: Props) => {
  return (
    <Paper className={cn(className, 'statitics')}>
      <IconPoints points={['.', '.', '.']} />
      <StatisticContenent title={title} subtitle={subtitle} icon={icon} />
    </Paper>
  )
}
