import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'

const poppins = Poppins({
  subsets: ['latin-ext'],
  display: 'swap',
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <main className='h-screen bg-neutral-300'>
      <Navbar />
    </main>
  )
}
