import { AxiosInstance } from 'axios'
import { axios } from '.'

export class UserService {
  private axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }

  async getUser(username: string) {
    const response = await this.axios.get(`users/${username}`)
    return response.data
  }
}

export const userService = new UserService(axios)
