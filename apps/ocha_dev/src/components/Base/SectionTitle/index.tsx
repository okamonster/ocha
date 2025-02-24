import styles from './style.module.css'

type Props = {
	title: string
	description: string
}

export const SectionTitle = ({
	title,
	description,
}: Props): React.ReactNode => {
	return (
		<div className={styles.sectionTitle}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.border} />
			<p className={styles.description}>{description}</p>
		</div>
	)
}
