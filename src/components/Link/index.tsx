import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

export const Link = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <Container>
      <a {...rest}>{children}</a>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
    </Container>
  )
}
