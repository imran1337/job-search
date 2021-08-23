import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme'


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: rgb(56,72,214);
background: linear-gradient(90deg, rgba(56,72,214,1) 2%, rgba(196,78,113,1) 49%, rgba(121,30,148,0.8015581232492998) 100%);
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