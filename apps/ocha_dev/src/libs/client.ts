/* eslint-disable turbo/no-undeclared-env-vars */
import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'ocha-dev-blog',
  apiKey: process.env.NEXT_PUBLIC_MICRO_CMS_API_KEY as string,
})
