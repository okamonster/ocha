import type { InferGetStaticPropsType, NextPage } from 'next'

import { DeafaultHead } from '~/components/Head/DefaultHead'
import { DefaultLayout } from '~/components/Layout/DefaultLayout'
import type { Blog } from '~/entitie/blog'
import { BlogContainer } from '~/features/blog/components/BlogContainer'
import { client } from '~/libs/client'

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  blogs: Array<Blog>
}

const BlogPage: NextPage<BlogPageProps> = ({ blogs }: Props) => {
  return (
    <DefaultLayout>
      <DeafaultHead
        title="お茶.dev"
        description="お茶/岡本和輝のポートフォリオ"
        ogpImage="https://www.xn--t8jy01w.dev/images/ogp.png"
        path="blog"
      />
      <BlogContainer blogs={blogs} />
    </DefaultLayout>
  )
}

export default BlogPage

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: 'blogs',
  })

  return {
    props: { blogs: data.contents },
  }
}
