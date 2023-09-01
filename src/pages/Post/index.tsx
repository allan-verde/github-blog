import { useNavigate, useParams } from 'react-router-dom'
import { Link } from '../../components/Link'
import { Container, Content, Header } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { issuesService } from '../../services/axios/Issues'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const Post = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const [issue, setIssue] = useState<any | null>(null)

  const time =
    issue !== null
      ? formatDistanceToNow(new Date(issue.updated_at || issue.created_at), {
          addSuffix: true,
          locale: ptBR
        })
      : 'Há 1 dia'

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    ;(async () => {
      if (id === undefined) return

      const response = await issuesService.getById(
        id,
        'allan-verde',
        'github-blog'
      )
      setIssue(response)
    })()
  }, [id])

  return (
    <Container>
      <Header>
        <div className="links">
          <Link preffix onClick={handleGoBack}>
            Voltar
          </Link>
          <Link suffix href="#">
            Ver no github
          </Link>
        </div>

        <div className="body">
          <h1>JavaScript data types and data structures</h1>

          <div className="info">
            <div>
              <FontAwesomeIcon icon={faGithub} fontSize={16} />
              <p>{issue?.user?.login || ''}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} fontSize={16} />
              <p>{time}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} fontSize={16} />
              <p>
                {issue?.user?.followers || 0}{' '}
                {(issue?.comments || 0) > 1 ? 'comentários' : 'comentário'}
              </p>
            </div>
          </div>
        </div>
      </Header>

      <Content>
        <p>{issue?.body}</p>
      </Content>
    </Container>
  )
}
