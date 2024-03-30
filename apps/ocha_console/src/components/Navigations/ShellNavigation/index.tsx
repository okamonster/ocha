import { AppShell } from '@mantine/core'
import { FaChevronLeft } from 'react-icons/fa'
import { CiHome, CiUser, CiPen, CiChat1 } from 'react-icons/ci'

import styles from './style.module.css'

import { NavItem } from '~/components/Navigations/NavItem'

type Props = {
  toggle: () => void
}

export const ShellNavigation = ({ toggle }: Props): React.ReactNode => {
  return (
    <AppShell.Navbar className={styles.navBar}>
      <div className={styles.navHeader}>
        <button onClick={toggle} className={styles.navButton}>
          <FaChevronLeft size={18} />
        </button>
        <h1 className={styles.title}>OCHA CONSOLE</h1>
      </div>

      <div className={styles.navItemList}>
        <NavItem label="ホーム" icon={<CiHome size={18} />} href="/" />
        <NavItem label="俺" icon={<CiUser size={18} />} href="/user" />
        <NavItem label="スキル登録" icon={<CiPen size={18} />} href="/skills" />
        <NavItem label="ブログ" icon={<CiPen size={18} />} href="/blog" />
        <NavItem
          label="問い合わせ"
          icon={<CiChat1 size={18} />}
          href="/contact"
        />
      </div>
    </AppShell.Navbar>
  )
}
