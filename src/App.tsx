import { CardList } from './components/CardList'
import { CircleGraph } from './components/Circle-Graph'
import { GraphCard } from './components/Graph-Card'
import { LinearGraph } from './components/Linear-Graph'
import { StatiticsList } from './components/StatiticsList'
import { cardsArray, statiticsArray } from './Data.js'
// import cards from './Data.json'
import './style.css'

// const longCard = {
//   title: 'Outpatients',
//   subtitle: '',
//   src: 'https://imageio.forbes.com/blogs-images/naomirobbins/files/2011/11/press-005-021.jpg?format=jpg&width=894',
//   alt: 'testo alternativo'
// }

// const circleGraph = {
//   src: 'https://media.geeksforgeeks.org/wp-content/uploads/20220914112521/PieChart.png',
//   alt: 'alt'
// }

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <StatiticsList data={statiticsArray} className="statitics" />
        <CardList data={cardsArray} className="cards" />

        {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Paper>
            <GraphCard title={longCard.title} subtitle={longCard.subtitle}>
              <LinearGraph src={longCard.src} alt={longCard.alt} />
              <CircleGraph src={circleGraph.src} alt={circleGraph.alt} />
            </GraphCard>
          </Paper>
          <Paper>
            <GraphCard title={longCard.title} subtitle={longCard.subtitle}>
              <CircleGraph src={circleGraph.src} alt={circleGraph.alt} />
            </GraphCard>
          </Paper>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Paper>
            <LinearGraph src={longCard.src} alt={longCard.alt} />
          </Paper>
          <Paper>
            <CircleGraph src={circleGraph.src} alt={circleGraph.alt} />
          </Paper>
          <Paper>
            <CircleGraph src={circleGraph.src} alt={circleGraph.alt} />
          </Paper>
        </div> */}
      </div>
    </div>
  )
}
