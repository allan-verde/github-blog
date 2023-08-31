import { styled } from 'styled-components'

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.22rem;
  color: ${({ theme }) => theme.blue};
  line-height: 0;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.blue};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`
