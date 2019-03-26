import axios from 'axios'

const options = {}
const _axios = axios.create(options)

function getCookie(str: string): string {
  const cookies: string[] = document.cookie.split(';')
  let result: string = ''
  cookies.forEach(item => {
    let idx: number = item.trim().indexOf('=')
    if (idx !== -1) {
      let arrCookie: string[] = item.split('=', 2)
      arrCookie[0] === str && (result = arrCookie[1])
    }
  })
  return result
}

const http = async (httpConfig: object): Promise<object> => {
  let res = null
  try {
    res = await _axios({
      timeout: 10000,
      ...httpConfig
    })
    return res.data
  } catch (err) {
    throw new Error(err)
  }
}

export default http
