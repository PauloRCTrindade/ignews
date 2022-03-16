import { signIn, useSession } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: string;
}

export default function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const { status } = useSession()

  function handleSubcripe() {

    if (status !== 'authenticated') {
      signIn('github')
      return
    }

    




  }
  return (
    <button
      className={styles.subscribeButton}
      type="button">

      Subscribe
    </button>
  )
};