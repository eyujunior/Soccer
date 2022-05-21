import React from 'react'

const Tabs = ({ categoryChanged, category }) => {
  return (
    <div className='tab-container'>
      <span
        className={`${
          category === 'standing' && 'current'
        } tab-item tab-item-1`}
      >
        <button onClick={() => categoryChanged('standing')}>Table</button>
      </span>
      <span
        className={`${category === 'scorers' && 'current'} tab-item tab-item-2`}
      >
        <button onClick={() => categoryChanged('scorers')}>Top Scorer</button>
      </span>
      <span
        className={`${category === 'matches' && 'current'} tab-item tab-item-3`}
      >
        <button onClick={() => categoryChanged('matches')}>Matches</button>
      </span>
    </div>
  )
}

export default Tabs
