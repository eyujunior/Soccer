import React from 'react'

const StandingHeader = () => {
  return (
    <tr>
      <th className='headers-item'>No</th>
      <th className='headers-item'>Team</th>
      <th className='headers-item'>pl</th>
      <th className='headers-item rmv-2'>won</th>
      <th className='headers-item rmv-2'>draw</th>
      <th className='headers-item rmv-2'>lose</th>
      <th className='headers-item'>pts</th>
      <th className='headers-item rmv-1'>gf</th>
      <th className='headers-item rmv-1'>ga</th>
      <th className='headers-item'>gd</th>
    </tr>
  )
}

export default StandingHeader
