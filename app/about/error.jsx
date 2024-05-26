'use client' // Error components must be Client Components

import { useEffect } from 'react'
import LottieError from '../components/LottieError'
import { Button } from '@nextui-org/react'

export default function Error({ error, reset }) {
    useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    }, [error])

    return (
        <section className="h-screen text-center pt-24">
            <LottieError />
            <h2>Something went wrong!</h2>
            <p className='font-semibold'>Error Message: <span className='text-base'>{error}</span></p>

            <Button
                onPress={()=> reset()}
                variant='solid'
                color='secondary'
            >
            Try again
            </Button>
        </section>
    )
}