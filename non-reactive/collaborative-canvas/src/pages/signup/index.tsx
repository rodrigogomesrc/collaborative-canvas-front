import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Signup.module.css";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    console.log("Form submitted successfully");
    setErrorMessage("");
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up for an account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles["signup-header"]}>
          <h1 className={styles["title"]}>Sign Up</h1>
        </div>

        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
          <label htmlFor="username" className={styles["form-label"]}>
            Username:
          </label>
          <input
            type="text"
            id="username"
            className={styles["form-input"]}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />

          <label htmlFor="password" className={styles["form-label"]}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={styles["form-input"]}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <label htmlFor="confirm-password" className={styles["form-label"]}>
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirm-password"
            className={styles["form-input"]}
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
          />

          {errorMessage && <div className={styles["error"]}>{errorMessage}</div>}

          <button type="submit" className={styles["submit-button"]}>
            Sign Up
          </button>
        </form>

        <div className={styles["login-link"]}>
          Already have an account?{" "}
          <Link href="/">
            Log in here
          </Link>
        </div>
      </div>
    </>
  );
}
