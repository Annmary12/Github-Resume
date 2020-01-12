import React from 'react'

const Button = ({ type, label, onClick, loading }) => (
  <button type={type} className='button' onClick={onClick}> {loading ? 'Loading...' : label} </button>
)

export default Button
