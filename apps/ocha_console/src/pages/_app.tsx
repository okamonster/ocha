import type { AppProps } from 'next/app'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
