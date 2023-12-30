'use client'
import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    const searchParams = useSearchParams()

    const getParamValue = (get: string) => searchParams?.get(get)


    return {
        getParamValue
    }
}