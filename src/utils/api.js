import axios from 'axios'

const API_TOKEN = 'e2afc489640a9190a6e9ba3065afe8'
const API_URL = `https://graphql.datocms.com/`

const fetchContent = query => {
  const data = JSON.stringify({ query })

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${API_TOKEN}`
  }

  return axios.post(API_URL, data, { headers })
}

export const fetchChapters = () => {
  const fields = 'name, content, position'
  const media = 'media { url, title }'
  const video = `video { ${fields}, ${media} }`
  const podcast = `podcast { ${fields}, ${media} }`
  const activities = `activities { id, ${fields}, ${media} }`
  const assignments = `assignments { id, ${fields}, ${media} }`
  const events = `events { id, ${fields}, time, location { longitude, latitude } }`
  return fetchContent(`{ allChapters { id, ${fields}, ${media}, ${video}, ${podcast}, ${activities}, ${assignments}, ${events} } }`)
}
