import axios from 'axios'

const BASE_YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const dispatcher = ({ method, params, url}) => {
  return axios.create({
    baseURL: BASE_YOUTUBE_API_URL,
    url,
    method,
    params
  })
}

export default dispatcher
