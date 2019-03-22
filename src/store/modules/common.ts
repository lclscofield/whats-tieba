import * as types from './mutationType'
import http from '../../api/http'

const state: any = {
  haha: 'hehehe'
}

const getters: any = {}

const actions: any = {
  async setx({ commit: Commit }: any, param: object): Promise<object> {
    const httpConfig = {
      method: 'post',
      url: '/api/query',
      data: param
    }
    const res: any = await http(httpConfig)
    return res
  }
}

const mutations: any = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
