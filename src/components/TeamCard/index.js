// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {matchDetails} = props
  const {name, id, teamImageUrl} = matchDetails
  return (
    <Link to={`/team-matches/${id}`}>
      <li className="list-item">
        <img src={teamImageUrl} alt={`${name}`} className="image" />
        <p className="heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
