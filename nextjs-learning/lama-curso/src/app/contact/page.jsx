import Image from 'next/image'
import styles from './contact.module.css'

export default function ContactPage() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src='/contact.png' alt='contact image' fill />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Name and Surname'/>
                    <input type="email" placeholder='Email Address'/>
                    <input type="text" placeholder='Phone Number (optional)'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Meessage'></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}