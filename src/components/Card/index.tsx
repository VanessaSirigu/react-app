import cn from 'classnames'
import { CardContenent } from '../CardContenent'
import { Line } from '../Line'
import { Paper } from '../Paper'
import { Title } from '../Title'
import './style.css'

export type Props = {
  title: string
  subtitle?: string
  srcImg: string
  // id?: string
  className?: string
  graphCircle?: string
}

export const Card = ({ title, subtitle, srcImg, className }: Props) => {
  return (
    <Paper className={cn('card', { className })}>
      <Title title={title} subtitle={subtitle} size="medium" />
      <Line />
      <CardContenent srcImg={srcImg} />
    </Paper>
  )
}
