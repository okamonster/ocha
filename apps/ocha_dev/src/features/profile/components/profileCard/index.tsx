import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.css'

import { SubBadge } from '~/components/Base/SubBadge'

export const ProfileCard = (): React.ReactNode => {
  return (
    <div className={styles.profileCard}>
      <Image
        src="/images/profile.jpeg"
        alt="プロフィール"
        width={200}
        height={200}
        objectFit="fill"
        className={styles.profileImage}
        loading="eager"
      />
      <div className={styles.profileDetail}>
        <p className={styles.name}>お茶/岡本和輝</p>

        <div className={styles.profileItem}>
          <SubBadge label="所属" />
          <ul>
            <li>立命館大学理工学部電子情報工学科</li>
            <li>株式会社メンヘラテクノロジー</li>
          </ul>
        </div>

        <div className={styles.profileItem}>
          <SubBadge label="LINK" />
          <ul>
            <li>
              <Link href="https://alice.helixcode.net/~bando/Lab/">
                近畿大学工業高等専門学校量子情報研究室
              </Link>
            </li>
            <li>
              <Link href="https://www.menhera-technology.com/">
                株式会社メンヘラテクノロジー
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
