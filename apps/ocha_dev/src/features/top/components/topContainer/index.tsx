import Image from 'next/image'

import styles from './style.module.css'

import { SkillCardList } from '~/features/top/components/skillCardList'
import { skillOptions } from '~/features/top/types'
import { TopVisual } from '~/features/top/components/topVisual'
import { DefaultHeader } from '~/components/Navigations/DefaultHeader'
import { SectionTitle } from '~/components/Base/SectionTitle'
import { MyProfile } from '~/features/top/components/myProfile'
import type { Blog } from '~/entitie/blog'
import { BlogCardList } from '~/features/top/components/blogCardList'
import { LinkButton } from '~/components/Buttons/LinkButton'
import { ContactList } from '~/features/top/components/contactList'

type Props = {
  blogs: Array<Blog>
}

export const TopContainer = ({ blogs }: Props): React.ReactNode => {
  return (
    <>
      <DefaultHeader />
      <TopVisual />
      <main className={styles.topContainer}>
        <section className={styles.section}>
          <SectionTitle title="PROFILE" description="自己紹介/経歴" />
          <div className={styles.profileContainer}>
            <Image
              src="/images/profile.webp"
              alt="プロフィール"
              width={200}
              height={200}
              objectFit="fill"
              className={styles.profileImage}
              loading="eager"
            />
            <MyProfile />
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="SKILLS" description="技術スキル" />
          <div className={styles.skillContainer}>
            <SkillCardList skills={skillOptions} />
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="BLOG" description="ブログはじめました" />
          <div className={styles.blogContainer}>
            <BlogCardList blogs={blogs} />
            <LinkButton href="/blog" label="ブログ一覧" width="150px" />
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="CONTACT" description="お問い合わせ" />
          <div className={styles.contactContainer}>
            <ContactList />
          </div>
        </section>
      </main>
    </>
  )
}
