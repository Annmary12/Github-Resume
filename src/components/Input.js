import React from 'react'

const Input = ({ handleChange, name, value, type, id, placeholder }) => (
  <input
    onChange={handleChange}
    name={name}
    value={value}
    type={type}
    id={id}
    placeholder={placeholder}
    className='input'
  />
)

export default Input
