/**
 * @description Get languages
 * @param {array} repos
 *
 * @returns {array}
 */
export const getLanguages = (repos) => {
  const languages = {}

  repos.map(repo => {
    if (repo.language) {
      if (repo.language in languages) {
        languages[repo.language]++
      } else {
        languages[repo.language] = 1
      }
    }
  })

  return languages
}

/**
 * @description Get total langauge
 * @param {object} languages
 *
 * @returns {number}
 */
export const getTotalLanguage = (languages) => {
  let totalLanguage = 0
  for (var lang in languages) {
    totalLanguage += languages[lang]
  }

  return totalLanguage
}

/**
 * @description Sort repo by popularity
 * @param {array} repos
 *
 * returns {array}
 */
export const sortByPopularity = (repos) => {
  let result

  result = repos.map(repo => {
    return {
      ...repo,
      popularity: repo.watchers + repo.forks
    }
  })

  result = result.sort((a, b) => b.popularity - a.popularity)

  return result
}

/**
 * @description Gets Language Percentage
 * @param {number} number
 * @param {number} totalLanguague
 * 
 * @returns {number}
 */
export const getLangPercent = (number, totalLanguague) => {
  return (number / totalLanguague) * 100
}

export const LIMIT = 4
