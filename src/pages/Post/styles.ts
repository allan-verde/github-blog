import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto 4rem;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${({ theme }) => theme['base-text']};

  .body {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.5rem;
    line-height: 130%;
  }

  .info {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        color: ${({ theme }) => theme['base-label']};
      }
    }
  }
`

export const Content = styled.div`
  padding: 2.5rem 2rem;
  color: ${({ theme }) => theme['base-text']};
`
