import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <h2 className="text-red-400">
     Hello
   </h2>
  )
}
