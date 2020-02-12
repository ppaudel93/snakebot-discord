import dispatcher from './api-dispatcher';

const getDetails = (key, videoUrl) => {
  const videoId = new URL(videoUrl).searchParams.get('v')
  return dispatcher({
    method: 'get',
    url: '/videos',
    params: {
      key,
      id: videoId,
      part: 'snippet'
    }
  })
}

export default getDetails