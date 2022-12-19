import cn from 'classnames'
import { Statistic, Stat as Statitics } from '../Statistic'
import './style.css'

type Props = {
  data: Statitics[]
}

export const StatiticsList = ({ data }: Props) => {
  return (
    <div className={cn('statitics-row')}>
      {data.map((e) => {
        return <Statistic icon={e.icon} title={e.title} subtitle={e.subtitle} />
      })}
    </div>
  )
}
