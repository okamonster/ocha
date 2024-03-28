import type { InferGetStaticPropsType, NextPage } from 'next'

import { DefaultLayout } from '~/components/Layout/DefaultLayout'
import type { Blog } from '~/entitie/blog'
import { TopContainer } from '~/features/top/components/topContainer'
import { client } from '~/libs/client'

type IndexPageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  blogs: Array<Blog>
}

const IndexPage: NextPage<IndexPageProps> = ({ blogs }: Props) => {
  return (
    <DefaultLayout>
      <TopContainer blogs={blogs} />
    </DefaultLayout>
  )
}

export default IndexPage

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
    queries: { limit: 3 },
  })
  return {
    props: { blogs: data.contents },
  }
}
