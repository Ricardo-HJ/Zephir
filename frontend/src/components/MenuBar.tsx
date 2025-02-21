import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuBar.module.css';

const MenuBar = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/');
  };

  return (
    <nav className={styles.menuBar}>
      <Link href="/home" className={styles.menuItem}>Home</Link>
      <Link href="/about" className={styles.menuItem}>About</Link>
      <Link href="/dashboard" className={styles.menuItem}>Dashboard</Link>
      <Link href="/profile" className={styles.menuItem}>Profile</Link>
      <button onClick={handleLogout} className={styles.menuItem}>Logout</button>
    </nav>
  );
};

export default MenuBar;