import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { User } from 'firebase/auth'
import { useRouter } from 'next/router'
import { signOut, onAuthStateChanged } from 'firebase/auth'

import { auth } from '~/libs/firebase'

const AuthContext = createContext<{
  uid: string | null
  currentUser: User | null | undefined
  isLogin: boolean
  logout: () => Promise<void>
} | null>(null)

const nonAuthPaths = ['/login']

const isAuthPath = (path: string) => {
  return !nonAuthPaths.some((nonAuthPath) => path.startsWith(nonAuthPath))
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { pathname, push } = useRouter()
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(null)
  const [uid, setUid] = useState<string | null>(null)

  const isLogin = useMemo(() => !!currentUser, [currentUser])

  const logout = async () => {
    await signOut(auth)
    setCurrentUser(null)
    setUid(null)
    push('/login')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!isAuthPath(pathname)) {
        return
      }

      if (!user) {
        setCurrentUser(null)
        setUid(null)
        push('/login')
        return
      }

      setCurrentUser(user)
      setUid(user.uid)

      return () => {
        unsubscribe()
      }
    })
  }, [pathname, push])

  return (
    <AuthContext.Provider
      value={{
        uid,
        currentUser,
        isLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

export const useAuthContext = () => useContext(AuthContext)
