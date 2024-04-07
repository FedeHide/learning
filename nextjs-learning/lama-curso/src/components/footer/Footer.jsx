import styles from './footer.module.css'

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Purris</div>
            <div className={styles.text}>Purris creative thoughts agency ©️ All rights reserved</div>
        </div>
    )
}