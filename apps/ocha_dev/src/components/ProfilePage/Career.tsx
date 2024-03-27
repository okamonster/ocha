import { Box, Text } from '@chakra-ui/react'
import { Timeline } from '@mantine/core'

import { SectionTitle } from '~/components/SectionTitle'

export const Career = () => {
  return (
    <Box display="grid" gap="20px" mb="20px">
      <SectionTitle title="CAREER" description="経歴" />
      <Timeline color="violet" active={3}>
        <Timeline.Item>
          <Text>爆誕</Text>
          <Text>2001/06/15</Text>
        </Timeline.Item>
        <Timeline.Item>
          <Text>
            近畿大学工業高等専門学校 総合システム工学科 制御情報コース
          </Text>
          <Text>2017/04 - 2022/03</Text>
        </Timeline.Item>
        <Timeline.Item>
          <Text>立命館大学 理工学部 電子情報工学科</Text>
          <Text>2022/04 -</Text>
        </Timeline.Item>
        <Timeline.Item>
          <Text>株式会社メンヘラテクノロジー</Text>
          <Text>2023/01 -</Text>
        </Timeline.Item>
        <Timeline.Item>
          <Text>よていはみてい</Text>
          <Text>Now -</Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  )
}
