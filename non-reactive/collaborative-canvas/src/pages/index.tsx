import Head from 'next/head';
import styles from '@/styles/Login.module.css';
import Link from 'next/link';
import { useState } from "react";


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (username === "admin" && password === "password") {
      
      console.log("Logged in successfully!");
      setErrorMessage("");

    } else {
      
      setErrorMessage("Invalid username or password");
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['container']}>
      <div className={styles['login-header']}>
        <h1 className={styles['login-header-h1']}>Login</h1>
      </div>
      <form onSubmit={handleLogin} className={styles['login-form']}>
        <div>
          <label htmlFor="username" className={styles['login-form-label']}>Username:</label>
          <input
            type="text"
            id="username"
            className={styles['login-form-input']}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className={styles['login-form-label']}>Password:</label>
          <input
            type="password"
            id="password"
            className={styles['login-form-input']}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {errorMessage && <div className={styles['error']}>{errorMessage}</div>}
        <button type="submit" className={styles['login-form-button']}>Login</button>
      </form>
      <div className={styles['signup-link']}>
        <Link href="/signup">
          Create an account
        </Link>
      </div>
    </div>
    </>
  )
}
