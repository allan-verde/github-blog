import { styled } from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme['base-post']};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.blue};
    animation: pulse 0.5s;
  }

  h2 {
    color: ${({ theme }) => theme['base-title']};
    font-size: 1.25rem;
    flex: 1;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }
`
