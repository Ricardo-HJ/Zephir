import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/home.module.css'
import MenuBar from '@/components/MenuBar'

export default function ProfilePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className={styles.container}>
      <MenuBar />
      <h1 className={styles.title}>Profile</h1>
      <p className={styles.subtitle}>This is a protected page.</p>
    </div>
  )
}