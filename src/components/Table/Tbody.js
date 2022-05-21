import Trow from './row'

const Tbody = ({ standing, scorers, matches, category }) => {
  let input = standing
  let arr = []
  if (category === 'standing') {
    input.sort((a, b) => {
      if (b.points !== a.points) {
        return b.points - a.points
      } else {
        return b.overall.goals_diff - a.overall.goals_diff
      }
    })
  } else if (category === 'scorers') {
    input = scorers
    input = input.slice(0, 10)
  } else if (category === 'matches') {
    arr = Object.entries(matches)
    arr.forEach((item) => {
      item.shift()
    })
    input = arr.map((item) => {
      return item[0]
    })

    input.length = 21
  }

  return (
    <tbody className='tbody'>
      {input.map((item, idx) => {
        return (
          <Trow
            key={item.team_id}
            rank={idx + 1}
            category={category}
            data={item}
          />
        )
      })}
    </tbody>
  )
}

export default Tbody
