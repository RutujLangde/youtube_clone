import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"

const options = {
    params: {
        maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': '121442bd84msh2a8c9ac152831e9p11f3fbjsnd6ab2eae4b9d',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);

    return data ;

  }