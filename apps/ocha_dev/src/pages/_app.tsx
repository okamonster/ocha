/* eslint-disable @typescript-eslint/naming-convention */

import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

import '~/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </MantineProvider>
  )
}
