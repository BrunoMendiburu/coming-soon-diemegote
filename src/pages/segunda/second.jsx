import Link from "next/link"
import React from "react"
import styles from "./second.module.css"

const Second = () => {
  const cardInfo = [
    {
      id: 1,
      title: "STATS CALCULATOR",
      link: "/stats/statsCalc",
    },
    {
      id: 2,
      title: "LAST CHAMP STATS",
      link: "/champLast/champlast",
    },
    {
      id: 3,
      title: "MAKE YOUR TOP 10 GOAT",
      link: "/goats/topten",
    },
    {
      id: 4,
      title: "1 CHAMP 1 FACT",
      link: "/unchamp/unchamp",
    },
  ]

  return (
    <main className={styles.container_main}>
      <div className={styles.container_cards}>
        {cardInfo.map(({ id, title, link }) => {
          return (
            <Link key={id} href={link} className={styles.container_links}>
              <div className={styles.card}>
                <h1>{title}</h1>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}

export default Second
