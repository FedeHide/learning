import Image from 'next/image';
import styles from './home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<div className="styles.textContainer">
				<h1 className={styles.title}>Creative Thoughts Agency</h1>
				<p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quis consequuntur dolore voluptatum sapiente doloribus</p>
				<div className={styles.buttons}>
					<div className={styles.button}>Learn More</div>
					<div className={styles.button}>Contact</div>
				</div>
				<div className={styles.brands}>
					<Image className={styles.brandImg} src='/brands.png' alt='' fill />
				</div>
			</div>
			<div className="styles.imgContainer">
				<Image className={styles.heroImg} src='/hero.gif' alt='' fill />
			</div>
		</div>
	);
}
