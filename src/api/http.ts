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
  } catch (err) {
    console.log('http-server error', err)
    throw new Error(err)
  }
  if (res && res.status >= 200 && res.status < 400) {
    if (res.data.success) {
      return res.data
    } else {
      // 是否需要显示错误提示
      if (res.data.errorCode < 100 || res.data.errorCode > 200) {
        console.log(res.data.errorMsg)
      }
      throw new Error('请求失败')
    }
  } else {
    throw new Error('请求失败')
  }
}

export default http
