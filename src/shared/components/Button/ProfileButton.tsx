import React from 'react'
import styles from './ProfileButton.module.css'

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