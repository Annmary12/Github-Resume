import React from 'react'

// components
import Input from './Input'
import Button from './button'

const Form = ({ generateResume, loading, username, handleChange }) => {
  return (
    <div>
      <label htmlFor='username'>Github username</label>
      <form onSubmit={generateResume}>
        <div className='homePage__form'>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder='Enter your github username'
            value={username}
            handleChange={handleChange}
          />
          <Button type='submit' label='Generate' loading={loading} />
        </div>
      </form>
    </div>
  )
}

export default Form
