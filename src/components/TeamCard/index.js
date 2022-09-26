// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam
  return (
    <Link to={`/team-matches/${id}`} className="team-link">
      <li className="list-items">
        <img src={teamImageUrl} alt={name} className="taemImage" />
        <p className="team_name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
