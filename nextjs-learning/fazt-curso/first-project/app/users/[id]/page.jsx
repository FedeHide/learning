import Image from 'next/image'

const getUser = async (id) => {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

export default async function UserPage({params}) {

    const user = await getUser(params.id)
    return (
        <div className="bg-slate-400 p-10 rounded-md">
            <Image priority={true} className='m-auto my-4' src={user.avatar} alt='profile photo' width={120} height={120} />
            <h3 className='text-3xl font-bold'>{user.id} {user.first_name} {user.last_name}</h3>
            <p>email: {user.email}</p>
        </div>
    )
}