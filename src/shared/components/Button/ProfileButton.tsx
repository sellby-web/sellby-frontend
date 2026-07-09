import styles from './ProfileButton.module.scss'

type ProfileButtonProps = {
    name: string;
    avatarUrl: string;
    onClick: () => void;
}

function ProfileButton({ name, avatarUrl, onClick }: ProfileButtonProps) {
  return (
    <button className={styles.profileButton} onClick={onClick}>
      <span className={styles.profileName}>{name}</span>
      <span className={styles.avatar}></span>
    </button>
  )
}

export default ProfileButton