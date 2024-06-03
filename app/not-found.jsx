import Link from 'next/link'
import LottieNotFound from './components/LottieNotFound'

export default function NotFound() {
  return (
    <main className="h-screen text-center pt-24">
      <LottieNotFound />
        <Link role='button' href="/" className='btn btn-primary'>
          Return Home
        </Link>
    </main>
  )
}