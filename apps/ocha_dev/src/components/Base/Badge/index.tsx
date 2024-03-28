import styles from './style.module.css'

type Props = {
  label: string
}

export const Badge = ({ label }: Props): React.ReactNode => {
  return <span className={styles.badge}>{label}</span>
}
