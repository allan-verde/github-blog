import { useCallback, useEffect, useState } from 'react'
import { Link } from '../../components/Link'
import { Container, Profile, Publications } from './styles'
import { userService } from '../../services/axios/user'
import { issuesService } from '../../services/axios/Issues'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'
import { useDebouncedCallback } from 'use-debounce'

type User = {
  name: string
  bio: string
  company: string
  followers: number
  login: string
}

export type Issue = {
  number: number
  title: string
  body: string
  created_at: string
  updated_at: string
  url: string
}

export const Home = () => {
  const [user, setUser] = useState<User | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])
  const [search, setSearch] = useState('')

  const fetchIssues = useCallback(async (text: string = '') => {
    const responseIssues = await issuesService.getByUserAndRepository(
      text,
      'github-blog',
      'allan-verde'
    )

    setIssues(
      responseIssues.items.map(
        (item: any): Issue => ({
          number: item.number,
          title: item.title,
          body: item.body,
          created_at: item.created_at,
          updated_at: item.updated_at,
          url: item.url
        })
      )
    )
  }, [])

  const debounce = useDebouncedCallback((value) => {
    fetchIssues(value)
  }, 1500)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value

    setSearch(value)
    debounce(value)
  }

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  useEffect(() => {
    ;(async () => {
      const response = await userService.getUser('allan-verde')

      setUser({
        name: response.name,
        bio: response.bio,
        company: response.company,
        followers: response.followers,
        login: response.login
      })
    })()
  }, [])

  return (
    <Container>
      <Profile>
        <img src="https://github.com/allan-verde.png" alt="" />

        <div className="info">
          <div className="header">
            <h1>{user?.name || 'Usuário'}</h1>
            <Link href="https://github.com/allan-verde" target="_blank">
              Github
            </Link>
          </div>

          <div className="body">
            <p>{user?.bio || 'Bio'}</p>

            <div>
              <div>
                <FontAwesomeIcon icon={faGithub} fontSize={16} />
                <p>{user?.login || ''}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} fontSize={16} />
                <p>{user?.company || 'Rocketseat'}</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} fontSize={16} />
                <p>
                  {user?.followers || 0}{' '}
                  {(user?.followers || 0) > 1 ? 'seguidores' : 'seguidor'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Profile>

      <Publications>
        <div className="header">
          <div>
            <h2>Publicações</h2>
            <p>
              {issues.length} {issues.length > 1 ? 'publicações' : 'publicação'}
            </p>
          </div>
          <Input value={search} onChange={handleSearch} />
        </div>

        <div className="content">
          {issues !== null
            ? issues.map((issue) => <Card key={issue.number} issue={issue} />)
            : null}
        </div>
      </Publications>
    </Container>
  )
}
