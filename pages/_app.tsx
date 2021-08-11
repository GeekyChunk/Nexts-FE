import type { AppProps } from 'next/app'
import store from '../store/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from "@chakra-ui/react"
import Layout from '../layouts/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ChakraProvider>
  )
}

export default MyApp
