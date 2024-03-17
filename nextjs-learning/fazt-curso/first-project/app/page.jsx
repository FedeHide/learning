import Users from "@/components/Users"


async function getUsers () {
    const res = await fetch('https://reqres.in/api/users')
    const data = await res.json()
    return data.data
}

export default async function HomePage() {
    const users = await getUsers()
    return (
        <Users users={users}/>
    )
}