import Link from 'next/link'

import styles from './style.module.css'

export const DefaultHeader = (): React.ReactNode => {
	return (
		<header className={styles.defaultHeader}>
			<Link href="/" className={styles.headerLogo}>
				<h1 className={styles.title}>OCHA.dev</h1>
			</Link>
		</header>
	)
}
