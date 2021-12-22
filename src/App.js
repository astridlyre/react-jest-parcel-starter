import * as styles from './App.module.css'

const imageUrl = new URL('cage.jpg', import.meta.url)

export default function App() {
  return (
    <main className={styles.root}>
      <h1 className={styles.header}>Hello World</h1>
      <figure className={styles.figure}>
        <img className={styles.img} src={imageUrl} alt='Nicholas Cage' />
        <figcaption className={styles.caption}>
          I'm going to steal the Declaration of Independence.
        </figcaption>
      </figure>
    </main>
  )
}
