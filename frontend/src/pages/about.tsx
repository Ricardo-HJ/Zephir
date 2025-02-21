import styles from '@/styles/home.module.css'
import MenuBar from '@/components/MenuBar'

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <MenuBar />
      <h1 className={styles.title}>About Page</h1>
      <p className={styles.subtitle}>This is a public page.</p>
    </div>
  )
}