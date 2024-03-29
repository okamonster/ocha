import { ActionIcon } from '@mantine/core'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import classNames from 'classnames'
import Link from 'next/link'

import styles from './style.module.css'

export const ContactList = (): React.ReactNode => {
  const twitterCardClass = classNames(styles.contactCard, styles.twitter)
  const instagramCardClass = classNames(styles.contactCard, styles.instagram)
  const githubCardClass = classNames(styles.contactCard, styles.github)

  return (
    <div className={styles.contactList}>
      <div className={twitterCardClass}>
        <p className={styles.title}>Twitter / X</p>
        <div className={styles.iconList}>
          <Link href="https://twitter.com/makura_nageru">
            <ActionIcon variant="white" size={40} aria-label="Twitter">
              <FaTwitter color="var(--color-twitter)" />
            </ActionIcon>
          </Link>
          <Link href="https://twitter.com/makura_nageru">
            <ActionIcon variant="white" size={40} aria-label="X">
              <FaXTwitter color="var(--color-x)" />
            </ActionIcon>
          </Link>
        </div>
        <p className={styles.snsId}>@makura_nageru</p>
      </div>

      <div className={styles.rightSection}>
        <div className={instagramCardClass}>
          <p className={styles.title}>Instagram</p>
          <div className={styles.iconList}>
            <Link href="https://www.instagram.com/oka_monster/">
              <ActionIcon variant="white" size={40} aria-label="Instagram">
                <FaInstagram color="var(--color-instagram)" />
              </ActionIcon>
            </Link>
          </div>
          <p className={styles.snsId}>oka_monster</p>
        </div>

        <div className={githubCardClass}>
          <p className={styles.title}>GitHub</p>
          <div className={styles.iconList}>
            <Link href="https://www.instagram.com/oka_monster/">
              <ActionIcon variant="white" size={40} aria-label="GitHub">
                <FaGithub color="var(--color-github)" />
              </ActionIcon>
            </Link>
          </div>
          <p className={styles.snsId}>okamonster</p>
        </div>
      </div>
    </div>
  )
}
