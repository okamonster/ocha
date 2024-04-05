import { ActionIcon } from '@mantine/core'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

import styles from './style.module.css'

import { ContactCard } from '~/features/top/components/contactCard'

export const ContactList = (): React.ReactNode => {
  return (
    <div className={styles.contactList}>
      <ContactCard
        title="Twitter / X"
        contents={
          <>
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
          </>
        }
        snsId="@makura_nageru"
        background="linear-gradient(to right, var(--color-twitter), #284859, #333)"
      />
      <div className={styles.rightSection}>
        <ContactCard
          title="Instagram"
          contents={
            <Link href="https://www.instagram.com/oka_monster/">
              <ActionIcon variant="white" size={40} aria-label="Instagram">
                <FaInstagram color="var(--color-instagram)" />
              </ActionIcon>
            </Link>
          }
          snsId="oka_monster"
          background="linear-gradient(45deg, #4c64d3, #cf2e92, #f26939, #ffdd83)"
        />

        <ContactCard
          title="GitHub"
          contents={
            <Link href="https://github.com/okamonster">
              <ActionIcon variant="white" size={40} aria-label="GitHub">
                <FaGithub color="var(--color-github)" />
              </ActionIcon>
            </Link>
          }
          snsId="okamonster"
          background="linear-gradient(to right, #000000, #434343)"
        />
      </div>
    </div>
  )
}
