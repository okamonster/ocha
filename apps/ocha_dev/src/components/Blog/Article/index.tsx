import { Box } from '@chakra-ui/react'

import styles from './style.module.scss'

import type { Blog } from '~/entitie/blog'
type Props = {
  blog: Blog
}

export const Article = ({ blog }: Props): React.ReactElement => {
  return (
    <Box p={['30px', '30px 85px']} bgColor="#FFFFFF" borderRadius="lg" w="100%">
      <div
        dangerouslySetInnerHTML={{ __html: blog.content }}
        className={styles.post}
      />
    </Box>
  )
}
