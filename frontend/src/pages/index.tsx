import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginPage from '@/components/LoginPage';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      // If logged in, redirect to the home page
      router.push('/home');
    }
  }, [router]);

  return <LoginPage />;
}