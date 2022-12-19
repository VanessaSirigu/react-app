import { Images } from '../Images'

type Props = {
  srcImg: string
}

export const CardContenent = ({ srcImg }: Props) => {
  return (
    <div className="content-card">
      <Images srcImg={srcImg} />
    </div>
  )
}
