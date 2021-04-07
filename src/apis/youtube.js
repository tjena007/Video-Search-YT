import axios from 'axios';

const KEY = 'AIzaSyA-L5KAXWvnME2w2Z4Owuzmb1GZEeTLcWA';

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part : 'snippet',
        type: 'video',
        maxResults: 5,
        key : KEY
    }
});