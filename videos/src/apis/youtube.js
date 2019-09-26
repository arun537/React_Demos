import axios from 'axios';

const KEY = 'AIzaSyA7MarVL7X3RU7V27aJoRgjq_oot-srf0A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults : 5,
        key: KEY
    }
})
