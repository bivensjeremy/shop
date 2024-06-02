'use client' // Error components must be Client Components

import { useEffect } from 'react'
import LottieError from './components/LottieError'

export default function Error({ error, reset }) {
    useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    }, [error])

    return (
        <section className="h-screen text-center pt-24">
            <LottieError />
            <h2>Something went wrong!</h2>
            <p className='font-semibold'>Error Message: <span className='text-base'>{error.message}</span></p>

            <button className='btn btn-secondary' onClick={()=> reset()}>
                Try Again
            </button>
        </section>
    )
}