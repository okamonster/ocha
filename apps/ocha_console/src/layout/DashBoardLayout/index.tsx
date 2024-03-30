import { AppShell, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { ShellNavigation } from '~/components/Navigations/ShellNavigation'

type Props = {
  children: React.ReactNode
}

export const DashBordLayout = ({ children }: Props) => {
  const [isOpened, handler] = useDisclosure()
  return (
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !isOpened },
      }}
    >
      <ShellNavigation toggle={handler.toggle} />
      <AppShell.Main bg="var(--color-bg-base)">
        <Burger
          onClick={handler.toggle}
          opened={isOpened}
          size="md"
          hidden={isOpened}
          hiddenFrom="sm"
        />
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
