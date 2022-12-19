import { CardList } from './components/CardList'
import { StatiticsList } from './components/StatiticsList'
import { cardsArray, statiticsArray } from './data'
import './style.css'

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <StatiticsList data={statiticsArray} />
        <CardList data={cardsArray} />
      </div>
    </div>
  )
}
