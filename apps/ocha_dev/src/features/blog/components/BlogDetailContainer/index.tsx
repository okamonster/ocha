import dayjs from 'dayjs'

import styles from './style.module.css'

import { DefaultHeader } from '~/components/Navigations/DefaultHeader'
import type { Blog } from '~/entitie/blog'
import { Article } from '~/features/blog/components/article'

type Props = {
  blog: Blog
}

export const BlogDetailContainer = ({ blog }: Props): React.ReactNode => {
  return (
    <>
      <DefaultHeader />
      <div className={styles.blogDetailContainer}>
        <div className={styles.heding}>
          <h2 className={styles.title}>{blog.title}</h2>
          <p>{dayjs(blog.publishedAt).format('YYYY年MM月DD日')}</p>
        </div>
        <Article content={blog.content} />
      </div>
    </>
  )
}
