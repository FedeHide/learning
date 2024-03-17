import TaskCard from "@/components/TaskCard"
import { prisma } from "@/libs/prisma"

async function loadTask() {
	// obteniendo de la base de datos
	const data = await prisma.task.findMany()

	// haciendo una peticion http /api/tasks
	// const res = await fetch('http://localhost:3000/api/tasks')
	// const data = await res.json()
	return data
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {

	const tasks = await loadTask()

	return (
		<section className="container mx-auto">
			<div className="grid grid-cols-3 gap-3 mt-10">
				{ tasks.map(task => (
					<TaskCard task={task} key={task.id} />
				))}
			</div>
		</section>
	)
}