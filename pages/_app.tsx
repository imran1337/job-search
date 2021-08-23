import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
     width: 100%; 
     box-sizing: border-box;
     -webkit-box-sizing:border-box;
     -moz-box-sizing: border-box;
}
`

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}