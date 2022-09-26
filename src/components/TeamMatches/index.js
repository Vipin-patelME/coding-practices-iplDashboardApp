// Write your code here
import {Component} from 'react'
import './index.css'

class TeamMatches extends Component {
  state = {matchDetail: []}

  componentDidMount() {
    this.matchDetails()
  }

  matchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id} `)
    const data = await response.json()
    const matchesDetails = data.map(eachData => ({
      latestMatchDetails: eachData.latest_match_details,
      recentMatches: eachData.recent_matches,
      teamBannerUrl: eachData.team_banner_url,
    }))
    this.setState({matchDetail: matchesDetails})
  }

  render() {
    const {matchDetail} = this.state
    console.log(matchDetail)
    return (
      <div>
        <h1>I am Vipin</h1>
      </div>
    )
  }
}
export default TeamMatches
