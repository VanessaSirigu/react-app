import { CardProps } from './components/Card'
import { Stat } from './components/Statistic'

export const cardsArray: CardProps[] = [
  {
    // id: '1',
    title: 'Card 1',
    // subtitle: 'Show by Month',
    srcImg:
      'https://imageio.forbes.com/blogs-images/naomirobbins/files/2011/11/press-005-021.jpg?format=jpg&width=894',
    graphCircle:
      'https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg'
  },
  {
    // id: '2',
    title: 'Card 2',
    // subtitle: 'Avaible staff',
    srcImg:
      'https://imageio.forbes.com/blogs-images/naomirobbins/files/2011/11/press-005-021.jpg?format=jpg&width=894'
  },
  {
    // id: '3',
    title: 'Card 3',
    // subtitle: 'Avg treat costs',
    srcImg:
      'https://imageio.forbes.com/blogs-images/naomirobbins/files/2011/11/press-005-021.jpg?format=jpg&width=894',
    graphCircle:
      'https://www.tibco.com/sites/tibco/files/media_entity/2022-01/PieChart-01.svg'
  },
  {
    // id: '4',
    title: 'Card 4',
    // subtitle: 'Avaible cars',
    // selector: 'Avaible cars',
    srcImg:
      'https://imageio.forbes.com/blogs-images/naomirobbins/files/2011/11/press-005-021.jpg?format=jpg&width=894'
  }
]

export const statiticsArray: Stat[] = [
  {
    id: '1',
    title: '3256',
    subtitle: 'Total patient',
    icon: 'bed'
  },
  {
    id: '2',
    title: '394',
    subtitle: 'Avaible staff',
    icon: 'wallet'
  },
  {
    id: '3',
    title: '$2,536',
    subtitle: 'Avg treat costs',
    icon: 'users'
  },
  {
    id: '4',
    title: '38',
    subtitle: 'Avaible cars',
    icon: 'ambulance'
  }
]
