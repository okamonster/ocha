/* eslint-disable @typescript-eslint/naming-convention */

import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

import '~/styles/globals.css'
import '~/styles/reset.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
