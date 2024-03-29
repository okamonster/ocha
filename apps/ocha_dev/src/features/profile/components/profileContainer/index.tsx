import { Timeline, TimelineItem } from '@mantine/core'

import styles from './style.module.css'

import { DefaultHeader } from '~/components/Navigations/DefaultHeader'
import { ProfileCard } from '~/features/profile/components/profileCard'
import { SectionTitle } from '~/components/Base/SectionTitle'

export const ProfileContainer = (): React.ReactNode => {
  return (
    <>
      <DefaultHeader />
      <div className={styles.profileContainer}>
        <ProfileCard />
        <section className={styles.profileSection}>
          <SectionTitle title="PROFILE" description="自己紹介" />
          <p className={styles.introduction}>
            高専から編入して琵琶湖の限界大学生になりました。
            <br />
            メンヘラテクノロジーでエンジニアとしてお世話になっています。
            <br />
            朝と直射日光と膝関節が弱点です。
          </p>
        </section>

        <section className={styles.careerSection}>
          <SectionTitle title="CAREER" description="経歴" />
          <Timeline color="var(--color-primary" active={3} bulletSize={24}>
            <Timeline.Item>
              <p>爆誕</p>
              <p>2001/06/15</p>
            </Timeline.Item>
            <TimelineItem>
              <p>近畿大学工業高等専門学校 総合システム工学科 制御情報コース</p>
              <p>2017/04 - 2022/03</p>
            </TimelineItem>
            <TimelineItem>
              <p>立命館大学 理工学部 電子情報工学科</p>
              <p>2022/04 -</p>
            </TimelineItem>
            <TimelineItem>
              <p>株式会社メンヘラテクノロジー</p>
              <p>2023/01 -</p>
            </TimelineItem>
            <Timeline.Item>
              <p>よていはみてい</p>
              <p>Now -</p>
            </Timeline.Item>
          </Timeline>
        </section>
      </div>
    </>
  )
}
