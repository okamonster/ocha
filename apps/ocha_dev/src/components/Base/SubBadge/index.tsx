import styles from './style.module.css'

type Props = {
	label: string
}

export const SubBadge = ({ label }: Props): React.ReactNode => {
	return (
		<div>
			<span className={styles.subBadge}>{label}</span>
		</div>
	)
}
