'use client'
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useEffect } from "react"


export default function NewPage({params}) {
    const router = useRouter()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        if (params.id) {
            fetch(`/api/tasks/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setTitle(data.title)
                    setDescription(data.description)
                })
        }
    }, [params.id])

    const onSubmit = async (e) => {
        e.preventDefault()
        if(params.id) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                body: JSON.stringify({title, description}),
                headers: {
                    "Content-Type": "aplication/json",
                }
            })
            const data = await res.json()

            console.log(data)
        } else {
            const description = e.target.description.value
        
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({title, description}), 
                headers: {
                    'content-type': 'application/json'
                }
            })
            const data = await res.json()
        }
        router.refresh()
        router.push('/')
    }
    return (
        <div className="h-screen flex justify-center items-center">
            <form onSubmit={onSubmit} className="bg-slate-800 p-10 w-2/3 md:w-1/2 lg:w-1/3">
                <label htmlFor="title" className="font-bold text-sm">Titulo de la tarea</label>
                <input 
                    id="title" 
                    className="border border-gray-400 p-2 mb-4 w-full text-black" 
                    type="text" 
                    placeholder="titulo"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    />

                <label htmlFor="description" className="font-bold text-sm">Descripcion de la tarea</label>
                <textarea 
                    id="description" 
                    className="border border-gray-400 p-2 mb-4 w-full text-black" 
                    rows="3" 
                    placeholder="describe tu tarea..."
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    >
                </textarea>
                <div className="flex justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Crear</button>
                    {
                        params.id && (
                            <button 
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
                                type="button"
                                onClick={async () => {await fetch(`/api/tasks/${params.id}`, {
                                    method: "DELETE",
                                }) 
                                    router.refresh()
                                    router.push('/')
                                }}>
                                Borrar
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    )
}