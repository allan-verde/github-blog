import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 4.5rem;
`

export const Profile = styled.div`
  background-color: ${({ theme }) => theme['base-profile']};
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme['base-text']};

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        color: ${({ theme }) => theme['base-title']};
        font-size: 1.5rem;
        line-height: 130%;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      div {
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
    }
  }
`

export const Publications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: ${({ theme }) => theme['base-text']};

  .header {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    :first-child {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 1.125rem;
      }

      p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme['base-span']};
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding-bottom: 4rem;
  }
`
