import '../styles/globals.scss'
import '../styles/_navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
