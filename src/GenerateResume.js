import React, { useState } from 'react'

// components
import Form from './components/Form'
import Resume from './components/Resume'

// helper
import { getLanguages, getTotalLanguage, sortByPopularity, LIMIT } from './helper'

const GITHUB_URL = 'https://api.github.com'
const Home = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [repos, setRepos] = useState('')
  const [user, setUser] = useState()
  const [username, setUsername] = useState('')
  const [languages, setLanguagues] = useState('')
  const [totalLang, setTotalLang] = useState(0)

  const handleChange = (event) => {
    if (error) {
      setError('')
    }
    setUsername(event.target.value)
  }

  const generateResume = async (event) => {
    event.preventDefault()
    setLoading(true)
    if (!username) {
      setError('Enter github username')
      setLoading(false)
      return
    }
    try {
      await getUser()
      await getRepos()

      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const getRepos = async () => {
    let result
    const url = `${GITHUB_URL}/users/${username}/repos`
    const response = await fetch(url, {
      method: 'GET'
    })
    result = await response.json()
    if (response.status > 400) {
      throw new Error(result.message)
    }
    const languages = await getLanguages(result)
    const totalLanguage = await getTotalLanguage(languages)
    result = await sortByPopularity(result)

    setRepos(result.slice(0, LIMIT))
    setLanguagues(languages)
    setTotalLang(totalLanguage)
  }

  const getUser = async () => {
    const url = `${GITHUB_URL}/users/${username}`
    const response = await fetch(url, {
      method: 'GET'
    })

    const result = await response.json()
    if (response.status > 400) {
      throw new Error(result.message)
    }
    setUser(result)
  }

  return (
    <div className='homePage'>
      <h1>Generate GitHub Resume</h1>
      {error && <div className='error'>{error}</div>}
      {!error && repos
        ? <Resume repos={repos} user={user} languages={languages} totalLanguague={totalLang}/>
        : <Form generateResume={generateResume} loading={loading} handleChange={handleChange} username={username} />}
    </div>
  )
}

export default Home
