import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer LB-rj2duv2UY4a1z-oqx0s_deBS3mg-PEq6c-ybcKbalLip5eZLoEwCdl_Xlc5IENiTeekoMxsZY8YLI9b1PLh3bPVtXyfB2KS-nL_t2u9lmQu3WOJ2Zr2Er1B3bXXYx',

  }
})
