import styles from './style.module.css'

import { SectionTitle } from '~/components/Base/SectionTitle'
import { DefaultHeader } from '~/components/Navigations/DefaultHeader'
import type { Blog } from '~/entitie/blog'
import { BlogCard } from '~/features/blog/components/blogCard'

type Props = {
  blogs: Array<Blog>
}

export const BlogContainer = ({ blogs }: Props): React.ReactNode => {
  return (
    <>
      <DefaultHeader />
      <main className={styles.blogContainer}>
        <SectionTitle title="BLOG" description="記事一覧" />
        <div className={styles.blogList}>
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
        </div>
      </main>
    </>
  )
}
