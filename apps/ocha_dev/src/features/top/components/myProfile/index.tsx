import styles from './style.module.css'

export const MyProfile = (): React.ReactNode => {
  return (
    <div className={styles.myProfile}>
      <div className={styles.heding}>
        <p className={styles.name}>お茶 / 岡本 和輝</p>
        <p className={styles.profession}>Web Engineer</p>
      </div>
      <div className={styles.profileItem}>
        <p className={styles.label}>所属</p>
        <p>立命館大学電子情報工学科</p>
        <p>株式会社メンヘラテクノロジー</p>
      </div>

      <div className={styles.profileItem}>
        <p className={styles.label}>好きな技術</p>
        <p>three.js / WebXR</p>
      </div>

      <div className={styles.profileItem}>
        <p className={styles.label}>趣味</p>
        <ul className={styles.hobbyList}>
          <li>コード書いて気絶</li>
          <li>コーヒー飲んで気絶</li>
          <li>スワンスワンズ</li>
        </ul>
      </div>
    </div>
  )
}
