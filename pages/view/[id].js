import styles from "../../styles/item.module.css"
import Card from "../../src/component/Card"
import Link from "next/link"

export default function Post(){
    return(
        <article className={styles.Post}>
            <section className={styles.section_images}>
                <div>
                    <button>{"<"}</button>
                    <div>
                        <img src="/images/test1.jpg"/>
                        <img src="/images/test2.jpg"/>
                    </div>
                    <button>{">"}</button>
                </div>
            </section>
            <section className={styles.section_profile}>
                <div>
                    <img src="/images/bros_blank.jpg"/>
                    <div>
                        <p id={styles.nickName}>닉네임</p>
                        <p id={styles.address}>서울시 관악구</p>
                    </div>
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
                <div className={styles.article_count}>
                    <span>관심 12 ∙ 채팅 13 ∙ 조회수 123</span>
                </div>
            </section>
            <section className={styles.suggest_item}>
                <div className={styles.suggest_title}>
                    <h1>이런 상품은 어떠세요?</h1>
                    <Link href={"/view/item_list"}>더 보기</Link>
                </div>
                <div className={styles.suggest_list}>        
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
        </article>
    )
}