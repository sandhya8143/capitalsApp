import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {paraItem: countryAndCapitalsList[0].id}

  onValue = event => {
    this.setState({
      paraItem: event.target.value,
    })
  }

  itemList = paraItem => {
    const filterItem = countryAndCapitalsList.find(each => each.id === paraItem)
    return filterItem.country
  }

  render() {
    const {paraItem} = this.state
    const kk = this.itemList(paraItem)
    return (
      <div className="capitals">
        <div className="countries">
          <h1>Countries And Capitals</h1>
          <div className="divContainer">
            <select onChange={this.onValue} className="selectItem">
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p>{kk}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
