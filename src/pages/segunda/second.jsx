import Link from "next/link"
import React from "react"
import styles from "./second.module.css"

const Second = () => {
  const cardInfo = [
    {
      id: 1,
      title: "STATS CALCULATOR",
      link: "#",
    },
    {
      id: 2,
      title: "LAST CHAMP STATS",
      link: "#",
    },
    {
      id: 3,
      title: "MAKE YOUR TOP 10 GOAT",
      link: "#",
    },
    {
      id: 4,
      title: "1 CHAMP 1 FACT",
      link: "#",
    },
  ]

  return (
    <main className={styles.container_main}>
      <div className={styles.container_cards}>
        {cardInfo.map(({ id, title, link }) => {
          return (
            <div key={id} className={styles.card}>
              <h1>{title}</h1>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Second
