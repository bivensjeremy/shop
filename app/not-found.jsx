import Link from 'next/link'
import { Button } from '@nextui-org/react'
import LottieNotFound from './components/LottieNotFound'

export default function NotFound() {
  return (
    <main className="h-screen text-center pt-24">
      <LottieNotFound />
      <Button
        as={Link}
        href="/"
        variant='solid'
        color='primary'
      >
            Return Home
            </Button>
    </main>
  )
}