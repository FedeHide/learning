'use client'

import Users from '@/components/Users'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: '400'})


export default function Home() {
    return (
        <section>
            <h1 className={roboto.className}>Home</h1>
            <Users />
        </section>
    )
}