import StandingHeader from './StandingHeader'
import ScorersHeader from './ScorersHeader'
import MatchesHeader from './MatchesHeader'
const Header = ({ category }) => {
  if (category === 'standing') {
    return <StandingHeader />
  } else if (category === 'scorers') {
    return <ScorersHeader />
  } else if (category === 'matches') {
    return <MatchesHeader />
  }
}

export default Header
