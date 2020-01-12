import React from 'react'
import * as moment from 'moment'

// component
import ProgressBar from './ProgressBar'

// helper
import { getLangPercent } from '../helper'

const Resume = ({ user, repos, languages, totalLanguague }) => {
  return (
    <div className='resume'>
      <span className='resume-username'>{user.name}</span>
      <span className='resume-sub-title'>{user.bio}</span>
      <span className='resume-url'>{user.html_url}</span>

      <div className='resume-desc'>
        On Github since {moment(user.created_at).format('gggg')}, {user.name} is a developer based in {user.location || 'xxx'} with <a href={user.repos_url}>{user.public_repos} public repositories</a> and <a href={user.followers_url}>{user.followers} followers</a>.
      </div>

      <h3>Languages</h3>
      <div className='resume-language'>
        {languages && Object.keys(languages).map((lang, index) => (
          <div key={index}>
            <span className='resume-language__item' key={index}>{lang} <span>{Math.floor(getLangPercent(languages[lang], totalLanguague))}%</span></span>
            <ProgressBar width={getLangPercent(languages[lang], totalLanguague)} />
          </div>
        ))}
      </div>

      <h3>Popular Repositories</h3>
      {repos.map((repo, index) => (
        <div className='resume-repo' key={repo.node_id}>
          <div className='resume-repo__section1'>
            <span className='resume-repo__name'>
              {repo.name}
            </span>
            <span className='resume-repo__year'>
              {moment(repo.created_at).format('gggg')} - {moment(repo.updated_at).format('gggg')}
            </span>
          </div>
          <div className='resume-repo__lang'> {repo.language} - {repo.license ? repo.license.name : 'N/A'}
          </div>
          <div className='resume-repo__desc'>
            {repo.description}
          </div>
          <div className='resume-repo__content'>
          This repository has {repo.stargazers_count} stars and {repo.forks_count} forks.
          If you would like more information about this repository and contributed code, please visit <a href={repo.html_url} className='resume-repo__link'>the repo</a> on Github.
          </div>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Resume
