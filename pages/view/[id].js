import styles from "../../styles/item.module.css"

export default function Post(){
    return(
        <article className={styles.Post}>
            <section className={styles.section_images}>
                <div>
                    <button>{"<"}</button>
                    <div>
                        <img src="/images/testimg.jpg"/>
                    </div>
                    <button>{">"}</button>
                </div>
            </section>
            <section className={styles.section_profile}>
                <div>
                    <img/>
                    <div>닉네임</div>
                </div>
            </section>
            <section className={styles.section_description}>
                <h1>매물이름</h1>
                <p>가격</p>
                <div>
                    <p>
                        블라블라<br/>
                        블라블라블라<br/>
                        블라블라<br/>
                        블랄라<br/>
                    </p>
                </div>
                <div className={""}>
                    <span>관심 12 </span>
                    ∙
                    <span> 채팅 13</span>
                </div>
            </section>
        </article>
    )
}