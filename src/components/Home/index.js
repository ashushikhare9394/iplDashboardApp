// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {matchData: [], isLoader: true}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({matchData: updatedData, isLoader: false})
  }

  render() {
    const {isLoader, matchData} = this.state
    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        {isLoader ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {matchData.map(each => (
              <TeamCard key={each.id} matchDetails={each} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
