import { styled } from 'styled-components'

import bgEffectImg from '../../assets/background-effect.svg'

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme['base-background']};
`

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
  margin-top: -6rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0 8rem;
  background-color: ${({ theme }) => theme['base-profile']};
  position: relative;
  overflow: hidden;

  img {
    width: 9.25;
  }

  &::before {
    content: '';

    background-image: url(${bgEffectImg});
    background-repeat: no-repeat;
    background-position-y: center;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  &::after {
    content: '';

    background-image: url(${bgEffectImg});
    background-repeat: no-repeat;
    background-position-y: center;

    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    transform: scaleX(-1);
  }

  .retangle {
    z-index: 0;
    width: 50%;
    height: 3rem;
    position: absolute;
    bottom: 0;
    flex-shrink: 0;
    background: ${({ theme }) => theme.blue};
    filter: blur(106px);
  }

  .circle {
    width: 14.75rem;
    height: 14.75rem;
    position: absolute;
    z-index: 0;
    top: 0;
    bottom: 0;
    flex-shrink: 0;
    border-radius: 50%;
    filter: blur(200px);
    background: ${({ theme }) => theme.blue};
    fill: ${({ theme }) => theme.blue};
  }

  .one {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .two {
    right: 0;
    transform: translate(50%, -50%);
  }
`
