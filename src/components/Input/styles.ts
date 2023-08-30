import { styled } from 'styled-components'

export const Container = styled.input`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme['base-border']};
  background-color: ${({ theme }) => theme['base-input']};
  color: ${({ theme }) => theme['base-text']};

  &::placeholder {
    color: ${({ theme }) => theme['base-label']};
  }
`
