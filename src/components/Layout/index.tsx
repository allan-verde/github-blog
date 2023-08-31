import { Outlet } from 'react-router-dom'

import { Container, Content, Header } from './styles'

import logoImg from '../../assets/logo.svg'

export const Layout = () => {
  return (
    <Container>
      <Header>
        <img src={logoImg} alt="" />
        <div className="circle one" />
        <div className="circle two" />
        <div className="retangle" />
      </Header>

      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
