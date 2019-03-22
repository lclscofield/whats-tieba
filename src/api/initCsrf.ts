import http from './http'

async function initCsrf(): Promise<object> {
  const httpConfig = {
    method: 'get',
    url: '/api/initCsrf'
  }
  const res = await http(httpConfig)
  return res
}

export default initCsrf
