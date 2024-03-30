import { ActionIcon } from '@mantine/core'
import Link from 'next/link'

import styles from './style.module.css'

type Props = {
  href: string
  icon: React.ReactNode
  label: string
}

export const NavItem = ({ href, icon, label }: Props): React.ReactNode => {
  return (
    <Link className={styles.navItem} href={href}>
      <ActionIcon color="var(--color-primary)">{icon}</ActionIcon>
      <p className={styles.label}>{label}</p>
    </Link>
  )
}
