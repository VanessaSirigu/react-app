import { Select } from '../Select'
import { Title } from '../Title'
import './style.css'

type Props = {
  title: string
  subtitle?: string
  size?: 'small' | 'medium' | 'large'
}

export const CardHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="card-header">
      <Title title={title} subtitle={subtitle} size="medium" />
      <Select />
    </div>
  )
}
