import { useState } from 'react';
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
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const formattedPublishedDate = format(publishedAt, "dd 'de' LLLL 'às' HH'h'mm", 
    { locale: ptBR },
  );
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const contentHTML = {
    paragraph: (line: Content) => <p key={line.content}>{line.content}</p>,
    link: (line: Content) => (
      <p key={line.content}>
        <a href={line.url} target="_blank">{line.content}</a>
      </p>
    ),
  }

  function handleAddComment(e: React.SyntheticEvent) {
    e.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(e.target.value)
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete);
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
        />
        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment 
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}
