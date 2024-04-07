import Image from 'next/image'
import styles from './singlePost.module.css'

export default function SinglePostPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/post-1' alt='post image' fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Title</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src='/post-1' alt='' width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Terry Jefferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                    <div className={styles.content}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet ab quasi sed eius facere dolorum maiores quia ex placeat?
                    </div>
                </div>
            </div>
        </div>
    )
}