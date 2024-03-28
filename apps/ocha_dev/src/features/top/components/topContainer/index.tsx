import Image from 'next/image'

import styles from './style.module.css'

import { TopVisual } from '~/features/top/components/topVisual'
import { DefaultHeader } from '~/components/Navigations/DefaultHeader'
import { SectionTitle } from '~/components/Base/SectionTitle'
import { MyProfile } from '~/features/top/components/myProfile'

export const TopContainer = (): React.ReactNode => {
  return (
    <>
      <DefaultHeader />
      <TopVisual />
      <main className={styles.topContainer}>
        <section className={styles.section}>
          <SectionTitle title="PROFILE" description="自己紹介/経歴" />
          <div className={styles.profileContainer}>
            <Image
              src="/images/profile.jpeg"
              alt="プロフィール"
              width={200}
              height={200}
              objectFit="fill"
              className={styles.profileImage}
            />
            <MyProfile />
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="SKILLS" description="技術スキル" />
        </section>
      </main>
    </>
  )
}
