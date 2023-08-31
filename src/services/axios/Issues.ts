import { AxiosInstance } from 'axios'
import { axios } from '.'

export class IssuesService {
  private axios: AxiosInstance

  constructor(axios: AxiosInstance) {
    this.axios = axios
  }

  async getByUserAndRepository(
    text: string,
    repository: string,
    username: string
  ) {
    const response = await this.axios.get(
      `search/issues?q=${text}%20repo:${username}/${repository}`
    )
    return response.data
  }
}

export const issuesService = new IssuesService(axios)
