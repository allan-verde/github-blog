import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import LinesEllipsis from 'react-lines-ellipsis'

import { useNavigate } from 'react-router-dom'

import { Container } from './styles'
import { Issue } from '../../pages/Home'

interface CardProps {
  issue: Issue
}

export const Card = ({ issue }: CardProps) => {
  const navigate = useNavigate()

  const time = formatDistanceToNow(
    new Date(issue.updated_at || issue.created_at),
    {
      addSuffix: true,
      locale: ptBR
    }
  )

  const handleNavigateToIssue = () => {
    navigate(`/issue/${issue.id}`)
  }

  return (
    <Container onClick={handleNavigateToIssue}>
      <div className="header">
        <h2>{issue.title}</h2>
        <span>{time}</span>
      </div>
      <LinesEllipsis
        text={issue.body}
        maxLine="4"
        ellipsis="..."
        trimRight
        basedOn="letters"
      />
    </Container>
  )
}
