import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../styles/globals.css';
import '../styles/main.scss'
import { store } from "../state/store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default MyApp
