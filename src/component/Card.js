import cards from "../componentModule/card.module.css"
import Link from 'next/link'

export default function Cardform(){
    return(
        <article className={cards.card}>
            <Link href={"/view/1"} className={cards.cardLink}>
                <div className={cards.cardImg}>
                    <img src="/images/testimg.jpg"/>
                </div>
                <div className={cards.cardDesc}>
                    <h2 className={cards.cardTitle}>이름이름이름</h2>
                    <div className={cards.cardPrice}>10000원</div>
                    <div className={cards.cardAddress}>서울 신림로 300</div>
                </div>
                <div className={cards.cardCount}>
                    <span>관심 12 </span>
                    ∙
                    <span> 채팅 13</span>
                </div>
            </Link>
        </article>
    )
}