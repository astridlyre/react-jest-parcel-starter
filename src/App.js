import * as styles from './App.module.css'
import image from './cage.jpg'

export default function App() {
  return (
    <main className={styles.root}>
      <h1 className={styles.header}>Hello World</h1>
      <figure className={styles.figure}>
        <img className={styles.img} src={image} alt="Nicholas Cage" />
        <figcaption className={styles.caption}>
          I&apos;m going to steal the Declaration of Independence.
        </figcaption>
      </figure>
    </main>
  )
}
