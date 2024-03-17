import Link from "next/link"

export default function NotFound() {
    return (
        <section className="flex h-[calc(100vh-7rem)] justify-center items-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Not Found 404</h1>
                <Link className="text-slate-400 hover:text-slate-200 text-2xl mt-5" href={'/'}>Volver al inicio</Link>
            </div>
        </section>
    )
}