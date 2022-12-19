import cn from 'classnames'
import { CardContenent } from '../CardContenent'
import { CardHeader } from '../CardHeader'
import { Line } from '../Line'
import { Paper } from '../Paper'
import { Select } from '../Select'
import { Title } from '../Title'
import './style.css'

export type CardProps = {
  title: string
  subtitle?: string
  srcImg: string
  className?: string
  graphCircle?: string
}

type Props = CardProps

export const Card = ({ title, subtitle, srcImg, className }: Props) => {
  return (
    <Paper className={cn('card', { className })}>
      <CardHeader title={title} subtitle={subtitle} />
      <Line />
      <CardContenent srcImg={srcImg} />
    </Paper>
  )
}
