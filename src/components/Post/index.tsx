import { Avatar } from '../Avatar';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/igorSouzza.png" />
          <div className={styles.authorInfo}>
            <strong>Igor Souza</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="01 de Janeiro às 19h40" dateTime="2023-01-03 19:40:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum 👋</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni autem consectetur reiciendis est asperiores at eaque culpa itaque. Voluptatum laborum sunt exercitationem aliquam similique illum ex fugit a iste.</p>
        <p>👉 <a href="" target="_blank">jane.design/doctorcare</a></p>
        <p>
          <a href="" target="_blank">#test {" "}</a>
          <a href="" target="_blank">#post {" "}</a>
          <a href="" target="_blank">#ignite</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}
