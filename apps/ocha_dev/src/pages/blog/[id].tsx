import type { InferGetStaticPropsType, NextPage } from 'next'
import { useEffect } from 'react'

import { DeafaultHead } from '~/components/Head/DefaultHead'
import { DefaultLayout } from '~/components/Layout/DefaultLayout'
import type { Blog } from '~/entitie/blog'
import { BlogDetailContainer } from '~/features/blog/components/BlogDetailContainer'
import { sendLogEvent } from '~/libs/analytics'
import { client } from '~/libs/client'

type BlogPageProps = InferGetStaticPropsType<typeof getStaticProps>

type Props = {
  id: string
  blog: Blog
}

const BlogDetailPage: NextPage<BlogPageProps> = ({ id, blog }: Props) => {
  useEffect(() => {
    sendLogEvent('read_blog', undefined)
    sendLogEvent('read_blog_article', { title: blog.title })
  }, [blog.title])

  return (
    <DefaultLayout>
      <DeafaultHead
        title={blog.title}
        description="お茶/岡本和輝のブログ"
        ogpImage={blog.OGP.url}
        path={`blog/${id}`}
      />
      <BlogDetailContainer blog={blog} />
    </DefaultLayout>
  )
}

export default BlogDetailPage

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })
  return {
    props: { id, blog: data },
  }
}
