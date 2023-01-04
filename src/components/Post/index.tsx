import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from '../Avatar';
import { Comment } from './Comment';

import { Author, Content } from '../../data/posts'

type PostProps = {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const formattedPublishedDate = format(publishedAt, "dd 'de' LLLL 'às' HH'h'mm", 
    { locale: ptBR },
  );
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const contentHTML = {
    paragraph: (line: Content) => <p>{line.content}</p>,
    link: (line: Content) => (
      <p>
        <a href={line.url} target="_blank">{line.content}</a>
      </p>
    ),
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={formattedPublishedDate} dateTime={publishedAt.toISOString()}>
          Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => contentHTML[line.type](line))}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
