import dispatcher from './api-dispatcher'

const getVideoUrl = (key, query) => {
  return dispatcher({
    method: 'get',
    url: '/search',
    params: {
      q: query,
      key,
      part: 'snippet'
    }
  })
}

export default getVideoUrl