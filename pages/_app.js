import '../styles/globals.css'
import '../styles/video.css'
// import '../styles/scroll.css'
import '../styles/tailwind.css'
import { AuthProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }) {
  return <AuthProvider>
      <Component {...pageProps} />
  </AuthProvider>
}
export default MyApp