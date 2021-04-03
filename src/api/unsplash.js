import axios from 'axios';
require('dotenv').config({ path: './../../.env' })

const api_key = process.env.REACT_APP_UNSPLASH_KEY;
// create default settings for axios instance
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + api_key
      } 
});