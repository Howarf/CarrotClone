import styles from "../componentModule/Header.module.css"
import Link from 'next/link'

export default function SignHeader(){
    return(
        <div className={styles.case} id={styles.SignCase}>
            <div className={styles.Header}>
                <Link href="/"><img id={styles.logo2} src="/images/logo.png" alt="순무마켓"/></Link>
            </div>
        </div>
    )
}