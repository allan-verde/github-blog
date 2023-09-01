import { Container } from './styles'

export const Input = ({
  children,
  ...rest
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) => {
  return (
    <Container placeholder="Buscar conteúdo" {...rest}>
      {children}
    </Container>
  )
}
