import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export default function SingnInButton() {

  const isUserLoggerIn = true; 

  return isUserLoggerIn ? (
    <button className={styles.singnInButton} type='button'>
      <FaGithub color='#04d361' />
      User Name
      <FiX color='#737380' className={styles.CloseIcon} />
    </button>
  ) : (
    <button className={styles.singnInButton} type='button'>
      <FaGithub color='#eba417' />
      Singn in with Github
    </button>
  )
};