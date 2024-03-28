import type { InferGetStaticPropsType, NextPage } from 'next'

import { DeafaultHead } from '~/components/Head/DefaultHead'
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
    <>
      <DeafaultHead
        title="お茶.dev"
        description="お茶/岡本和輝のポートフォリオ"
        ogpImage="https://www.xn--t8jy01w.dev/images/ogp.png"
      />
      <DefaultLayout>
        <TopContainer blogs={blogs} />
      </DefaultLayout>
    </>
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
