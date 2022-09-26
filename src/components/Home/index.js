// Write your code here
import {Component} from 'react'
import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplDetail: []}

  componentDidMount() {
    this.iplData()
  }

  iplData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const iplData = teams.map(eachData => ({
      id: eachData.id,
      teamImageUrl: eachData.team_image_url,
      name: eachData.name,
    }))
    this.setState({iplDetail: iplData})
  }

  render() {
    const {iplDetail} = this.state
    return (
      <div className="main-home-bg">
        <div className="Logo-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="logo-image"
          />
          <h1 className="dashboadr-heading">IPL Dashboard</h1>
        </div>
        <ul className="taem_list">
          {iplDetail.map(eachTeam => (
            <TeamCard eachTeam={eachTeam} key={eachTeam.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
