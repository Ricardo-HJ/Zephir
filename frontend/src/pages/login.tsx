"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import styles from '@/styles/login.module.css'

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username === "user" && password === "password") {
      localStorage.setItem('isLoggedIn', 'true')
      router.push("/home")
    } else {
      setError("Invalid credentials")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image src="/Logo_V1.png" alt="Logo" width={40} height={40} className={styles.logoImage} />
          </div>
        </div>
        <h1 className={styles.title}>Login</h1>
        <p className={styles.description}>Enter your credentials to access your account</p>
        <form onSubmit={handleLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.button}>
            Log in
          </button>
        </form>
      </div>
    </div>
  )
}