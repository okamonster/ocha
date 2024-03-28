import type { NextPage } from 'next'

import { DefaultLayout } from '~/components/Layout/DefaultLayout'
import { TopContainer } from '~/features/top/components/topContainer'

const IndexPage: NextPage = () => {
  return (
    <DefaultLayout>
      <TopContainer />
    </DefaultLayout>
  )
}

export default IndexPage
