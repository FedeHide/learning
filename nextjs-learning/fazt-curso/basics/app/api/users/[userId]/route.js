import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    console.log(params)
    const {searchParams} = new URL(request.url)
    console.log(searchParams)
    console.log(searchParams.get('name'), searchParams.get('last'))
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    const data = await res.json()
    return NextResponse.json(data)
}