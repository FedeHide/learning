'use client'
import { useRouter, use } from 'next/navigation'

// export const metadata = {
// 	title: 'Acerca de nosotros - PurrisWeb'
// }

const AboutPage = () => {
	const router = useRouter()

    return (
		<section>
			<h1>About</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolorem officia dignissimos voluptatum, error praesentium rerum ullam vero sint officiis excepturi saepe nostrum quidem velit eos libero esse suscipit molestiae dicta mollitia ipsum! Magni voluptatum iusto at tempore excepturi eos voluptatibus impedit voluptas natus, hic eius itaque dolorum dolor unde, est delectus quod maxime cum earum id molestias, porro numquam? Nesciunt ratione voluptatibus nam illo iure sequi, provident hic numquam rerum debitis necessitatibus aliquid laboriosam deleniti neque natus corporis unde architecto quas iusto quo possimus. Nihil obcaecati quia doloremque eligendi est officia a sint? Architecto molestias obcaecati modi aperiam minima!</p>

			<button 
				className="bg-sky-400 px-3 py-2 rounded-md"
				onClick={() => router.push('/')}>
					Home
			</button>
		</section>
    );
};

export default AboutPage;