// For integration with MEE6 custom bot
export default {
  Music: {
    add: {
      usage: '[search]',
      description: 'Add a music to the queue',
    },
    join: {
      description: 'Joins the user voice channel',
    },
    leave: {
      description: 'Leaves current voice channel',
    },
    np: {
      description: 'Displays the current playing track',
    },
    pause: {
      description: 'Pause the current playing song',
    },
    play: {
      usage: '[search]',
      description: 'Resumes the track / Adds the song to the queue and plays it if the queue is empty',
    },
    previous: {
      description: 'Plays the previous track',
    },
    queue: {
      description: 'Displays the current queue',
    },
    replay: {
      description: 'Replays the current music',
    },
    resume: {
      description: 'Resume playing the current song',
    },
    search: {
      usage: '<search>',
      description: 'Searches for a song that can be later added to the queue',
    },
    seek: {
      usage: '<position>',
      description: "Changes the current track's position",
    },
    stop: {
      description: 'Stops the current playing song and leaves the voice channel',
    },
    volume: {
      usage: '[volume]',
      description: 'Displays or changes the volume of the current playing song',
    },
    'vote-skip': {
      description: 'Starts a vote to skip to the next song',
    },
  },
  Levels: {
    levels: {
      description: 'Gets a link to the leaderboard',
    },
    rank: {
      usage: '[member]',
      description: 'Gets the rank of anyone in the server',
    },
  },
}
