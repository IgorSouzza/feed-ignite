import styles from './Avatar.module.css';

type AvatarProps = {
  src: string
}

export function Avatar({ src }: AvatarProps) {
  return <img className={styles.avatar} src={src} />
}