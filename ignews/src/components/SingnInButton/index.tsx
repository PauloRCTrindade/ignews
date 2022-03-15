import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'
import styles from './styles.module.scss'

export default function SingnInButton() {

  const { data: session,status } = useSession();

  console.log(session);
  console.log(status);

  return status === 'authenticated' ? (
    <button
      className={styles.singnInButton}
      type='button'
      onClick={() => signOut()}
      >

      <FaGithub color='#04d361' />
      {session.user.name}
      <FiX color='#737380' className={styles.CloseIcon} />
    </button>
  ) : (
    <button
      className={styles.singnInButton}
      type='button'
      onClick={() => signIn('github')}>
      <FaGithub color='#eba417' />
      Singn in with Github
    </button>
  )
};