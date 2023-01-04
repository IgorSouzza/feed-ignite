import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

import { Avatar } from '../../Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://thispersondoesnotexist.com/image" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Igor Souza</strong>
              <time title="01 de Janeiro às 19h40" dateTime="2023-01-03 19:40:30">Cerca de 1h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}