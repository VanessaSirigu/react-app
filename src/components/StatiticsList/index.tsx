import cn from 'classnames'
import { Statistic, Props as Statitics } from '../Statistic'
import './style.css'

type Props = {
  data: Statitics[]
}

export const StatiticsList = ({ data }: Props) => {
  return (
    <div className={cn('row')}>
      {data.map((e) => {
        return <Statistic icon={e.icon} title={e.title} subtitle={e.subtitle} />
      })}
    </div>
  )
}
