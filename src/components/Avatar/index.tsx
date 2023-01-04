import styles from './Avatar.module.css';

type AvatarProps = {
  src: string
  hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  const classes = {
    default: styles.avatar,
    bordered: `${styles.avatar} ${styles.withBorder}`
  }

  return <img className={hasBorder ? classes.bordered : classes.default} src={src} />
}