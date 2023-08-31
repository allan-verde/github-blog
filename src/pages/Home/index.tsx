import { useEffect, useState } from 'react'
import { Link } from '../../components/Link'
import { Container, Profile, Publications } from './styles'
import { userService } from '../../services/axios/user'
import { issuesService } from '../../services/axios/Issues'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Input } from '../../components/Input'
import { Card } from '../../components/Card'

export const Home = () => {
  const [user, setUser] = useState<any>(null)
  const [search, setSearch] = useState('')
  const [issues, setIssues] = useState<any[]>([1, 2, 3, 4, 5, 6])

  useEffect(() => {
    const fetchIssues = async () => {
      const responseIssues = await issuesService.getByUserAndRepository(
        'test',
        'github-blog',
        'allan-verde'
      )

      console.log(responseIssues.items)
      setIssues(responseIssues.items)
    }

    fetchIssues()
  }, [search])

  useEffect(() => {
    const fetchUser = async () => {
      const response = await userService.getUser('allan-verde')

      console.log(response)

      setUser({
        name: response.name,
        bio: response.bio,
        company: response.company,
        followers: response.followers
      })
    }

    fetchUser()
  }, [])

  return (
    <Container>
      <Profile>
        <img src="https://github.com/allan-verde.png" alt="" />

        <div className="info">
          <div className="header">
            <h1>Cameron Williamson</h1>
            <Link>Github</Link>
          </div>

          <div className="body">
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>

            <div>
              <div>
                <FontAwesomeIcon icon={faGithub} fontSize={16} />
                <p>cameronwll</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faBuilding} fontSize={16} />
                <p>Rocketseat</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} fontSize={16} />
                <p>32 seguidores</p>
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
          <Input />
        </div>

        <div className="content">
          {issues !== null
            ? [1, 2, 3, 4, 5, 6].map((issue) => <Card key={issue} />)
            : null}
        </div>
      </Publications>
    </Container>
  )
}
