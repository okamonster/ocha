import styles from './style.module.scss'

type Props = {
  content: string
}

export const Article = ({ content }: Props): React.ReactNode => {
  return (
    <div className={styles.article}>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.post}
      />
    </div>
  )
}
