import React from 'react'
import { Link } from 'react-router-dom'
import styles from './landing.module.css'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <div className={styles.titleContainer}>
        <h1
          className={styles.title}
          data-text="Welcome to the gamer's world"
        >
          Welcome to the gamer's world!
        </h1>
      </div>
      <Link to="/home">
        <button className={styles.mainBtn}>Start</button>
      </Link>
    </div>
  )
}
