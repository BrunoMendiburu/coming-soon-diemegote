import React from "react"
import styles from "./landing.module.css"
import Link from "next/link"

const Landing = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1>NBA</h1>
      </div>
      <div className={styles.sub}>
        <h1>ULTRA</h1>
      </div>
      <div className={styles.subtle}>
        <h1>TIMES</h1>
      </div>
      <div className={styles.button}>
        <Link href="/segunda/second">
          <button>NEXT</button>
        </Link>
      </div>
      <div className={styles.circle}></div>
    </main>
  )
}

export default Landing
