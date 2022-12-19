import { CardList } from './components/CardList'
import { StatiticsList } from './components/StatiticsList'
import { data } from './Data.js'
import './style.css'

export const App = () => {
  return (
    <div className="app">
      <div className="container">
        <StatiticsList data={data.statitics} />
        <CardList data={data.cards} />
      </div>
    </div>
  )
}
