import styles from './style.module.css'

import { BlogCard } from '~/features/blog/components/blogCard'
import type { Blog } from '~/entitie/blog'

type Props = {
  blogs: Array<Blog>
}

export const BlogCardList = ({ blogs }: Props): React.ReactNode => {
  return (
    <div className={styles.blogCardList}>
      {blogs.map((blog) => (
        <BlogCard blog={blog} key={blog.id} />
      ))}
    </div>
  )
}
