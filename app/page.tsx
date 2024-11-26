import Image from 'next/image'
import Link from 'next/link'
import Products from './components/Products'

export default function Home() {
  return (
  <main>
   <h1>HOMEPAGE</h1> 
   <Link href='/users'>
   Users Page
   </Link>

   <Products/>
  </main>
  )
}
