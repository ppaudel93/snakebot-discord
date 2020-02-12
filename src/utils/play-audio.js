import ytdl from 'ytdl-core'

const streamOptions = { seek: 0, volume: 1 }

const playAudio = (connection, link) => {
  const stream = ytdl(link, { filter: 'audioonly' })
  connection.playStream(stream, streamOptions)
}

export default playAudio
