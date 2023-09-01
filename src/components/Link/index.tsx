import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import { Container } from './styles'

type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> & {
  preffix?: boolean
  suffix?: boolean
}

export const Link = ({
  children,
  preffix = false,
  suffix = false,
  ...rest
}: LinkProps) => {
  return (
    <Container>
      {preffix && <FontAwesomeIcon icon={faChevronLeft} fontSize={12} />}
      <a {...rest}>{children}</a>
      {suffix && (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} fontSize={12} />
      )}
    </Container>
  )
}
