import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { IconName } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import { IconPoints } from '../IconPoints'
import { Paper } from '../Paper'
import { StatisticContenent } from '../StatisticsContenent'
import './style.css'

export type Stat = {
  id?: string
  icon: IconName
  title: string
  subtitle: string
  className?: string
  size?: 'small' | 'medium' | 'large'
}

type Props = Stat

export const Statistic = ({ title, subtitle, icon, className }: Props) => {
  return (
    <Paper className={cn(className, 'statitics')}>
      <IconPoints points={['.', '.', '.']} />
      <StatisticContenent title={title} subtitle={subtitle} icon={icon} />
    </Paper>
  )
}
