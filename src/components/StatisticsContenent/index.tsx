import { Icon } from '../Icon'
import { Title } from '../Title'
import './style.css'

export type Props = {
  icon: string
  title: string
  subtitle: string
}

export const StatisticContenent = ({ icon, title, subtitle }: Props) => {
  return (
    <div className="stat-contenent">
      <Icon icon={icon} />
      <Title title={title} subtitle={subtitle} size="small" />
    </div>
  )
}
