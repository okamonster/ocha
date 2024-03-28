import Link from 'next/link'

import styles from './style.module.css'

type Props = {
  label: string
  href: string
  width?: string
}

export const LinkButton = ({
  label,
  href,
  width = '100%',
}: Props): React.ReactNode => {
  return (
    <Link
      className={styles.linkButton}
      href={href}
      style={{
        width,
      }}
    >
      {label}
    </Link>
  )
}
