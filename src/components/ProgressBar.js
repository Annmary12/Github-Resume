import React from 'react'

const ProgressBar = ({ width }) => (
  <div className='progress-wrap'>
    <div className='progress-bar' id='pb-demo' style={{ width: `${width}%` }} />
  </div>
)

export default ProgressBar
