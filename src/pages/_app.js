import Footer from '@/components/global/footer/Footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <><Component {...pageProps} /><Footer/></>
}
