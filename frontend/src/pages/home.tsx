import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css';
import MenuBar from '@/components/MenuBar';

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      router.push('/');
    } else {
      setIsAuthenticated(true);
    }
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.container}>
      <MenuBar />
      <h1 className={styles.title}>Welcome to your Home Page!</h1>
      <p className={styles.subtitle}>You have successfully logged in.</p>
    </div>
  );
}