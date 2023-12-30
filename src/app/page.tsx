
import Aside from '@/components/html/aside/Aside'
import styles from './page.module.scss'
import Link from 'next/link'

export default function Home() {
  return (

   <div>
    <h2>Home</h2>
    <p>
      <Link href={'/sing-in'}>Sing In</Link>
      <Link href={'/sing-in'}>Log In</Link>
    </p>

   </div>
 
  )
}
