import React from 'react'

const ScorersHeader = () => {
  return (
    <tr>
      <th className='headers-item'>No</th>
      <th className='headers-item'>Player</th>
      <th className='headers-item'>Goals</th>
      <th className='headers-item rmv-2'>Away</th>
      <th className='headers-item rmv-2'>Penalty</th>
      <th className='headers-item rmv-2'>Home</th>
      <th className='headers-item'>Ply</th>
    </tr>
  )
}

export default ScorersHeader
