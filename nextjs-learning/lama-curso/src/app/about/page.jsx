import Image from "next/image";
import styles from './about.module.css'

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.subtitle}>About Agency</h2>
                <h1 className={styles.title}>We create digital ideal that are bigger, bolder, braver and better</h1>
                <p className={styles.desc}>We create digital ideas that are bigger, bolder, braver and better. We believe in good ideas, flexibility and precision. We&apos;re world&apos;s Our Special Team best consulting & finance solution provider. Wide range of web and software development services</p>
                <div className={styles.boxes}>
                    <div className={styles.box}>
                        <h1>10 K+</h1>
                        <p>years of experience</p>
                    </div>
                    <div className={styles.box}>
                        <h1>234 K+</h1>
                        <p>People reached</p>
                    </div>
                    <div className={styles.box}>
                        <h1>5 K+</h1>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/about.png' alt="about image" fill/>
            </div>
        </div>
    )
}