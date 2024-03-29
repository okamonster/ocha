import styles from './style.module.css'

type Props = {
  title: string
  contents: React.ReactNode
  snsId: string
  background: string
}

export const ContactCard = ({
  title,
  contents,
  snsId,
  background,
}: Props): React.ReactNode => {
  return (
    <div
      className={styles.contactCard}
      style={{
        background,
      }}
    >
      <p className={styles.title}>{title}</p>
      <div className={styles.iconList}>{contents}</div>
      <p className={styles.snsId}>{snsId}</p>
    </div>
  )
}
