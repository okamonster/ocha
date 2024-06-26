import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import '@mantine/core/styles.css'

import '~/styles/globals.css'
import '~/styles/reset.css'
import '~/styles/variables.css'
import { AuthProvider } from '~/providers/AuthProvider'

// eslint-disable-next-line @typescript-eslint/naming-convention
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </AuthProvider>
  )
}
