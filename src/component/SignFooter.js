import styles from "../componentModule/Footer.module.css"

export default function SignFooter(){
    return(
        <div className={styles.SignFooter}>
            <div>
                <div className={styles.FootList}>
                    <a href="">이용약관</a>
                    <a href="" id={styles.highlight}>개인정보처리방침</a>
                    <a href="">위치기반서비스 이용약관</a>
                </div>
                <div>© Daangn Market Inc.</div>
            </div>
        </div>
    )
}