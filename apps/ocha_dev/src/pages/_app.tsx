/* eslint-disable @typescript-eslint/naming-convention */

import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

import '~/styles/reset.css'
import '~/styles/variables.css'
import '~/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
