import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

const App = () => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <div>
      <h1>Hello World</h1>
    </div>
  </ThemeProvider>
)

export { App }
