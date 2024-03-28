import { Card, Image } from '@mantine/core'
import Link from 'next/link'
import dayjs from 'dayjs'

import styles from './style.module.css'

import type { Blog } from '~/entitie/blog'
import { Badge } from '~/components/Base/Badge'

type CardProps = {
  blog: Blog
}

export const BlogCard = ({ blog }: CardProps): React.ReactNode => {
  return (
    <Link href={`/blog/${blog.id}`}>
      <Card shadow="lg">
        <Card.Section>
          <Image src={blog.OGP.url} mah={180} fit="fill" />
        </Card.Section>

        <Card.Section p={10}>
          <p className={styles.title}>{blog.title}</p>
          <p>{dayjs(blog.publishedAt).format('YYYY/MM/DD')}</p>
          <div className={styles.tagList}>
            <Badge label={`#${blog.tag}`} />
          </div>
        </Card.Section>
      </Card>
    </Link>
  )
}
