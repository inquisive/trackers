import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://trackers.inquisive.com:4442/pushData/`,
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
