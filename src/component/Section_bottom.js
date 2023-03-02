import section4 from '../../styles/section_bottom.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState,useEffect } from "react";

export default function Section_bottom(){
    useEffect(() => {
        //DB연결
    })
    return(
        <section className={section4.contents}>
            <div>
                <h1 id={section4.hotTitle}>중고거래 인기매물</h1>
                <div className={section4.cardList}>
                    <article className={section4.card}>
                        <Link href="#" className={section4.cardLink}>
                            <div className={section4.cardImg}>
                                <img src="/images/testimg.jpg"/>
                            </div>
                            <div className={section4.cardDesc}>
                                <h2 className={section4.cardTitle}>이름이름이름</h2>
                                <div className={section4.cardPrice}>10000원</div>
                                <div className={section4.cardAddress}>서울 신림로 300</div>
                            </div>
                            <div className={section4.cardCount}>
                                <span>관심 12 </span>
                                ∙
                                <span> 채팅 13</span>
                            </div>
                        </Link>
                    </article>
                    <article className={section4.card}>
                        <Link href="#" className={section4.cardLink}>
                            <div className={section4.cardImg}>
                                <img src=""/>
                            </div>
                            <div className={section4.cardDesc}>
                                <h2 className={section4.cardTitle}>{}</h2>
                                <div className={section4.cardPrice}>{}</div>
                                <div className={section4.cardAddress}>{}</div>
                            </div>
                            <div className={section4.cardCount}>
                                <span>관심{}</span>
                                •
                                <span>채팅{}</span>
                            </div>
                        </Link>
                    </article>
                    <article className={section4.card}>
                        <Link href="#" className={section4.cardLink}>
                            <div className={section4.cardImg}>
                                <img src=""/>
                            </div>
                            <div className={section4.cardDesc}>
                                <h2 className={section4.cardTitle}>{}</h2>
                                <div className={section4.cardPrice}>{}</div>
                                <div className={section4.cardAddress}>{}</div>
                            </div>
                            <div className={section4.cardCount}>
                                <span>관심{}</span>
                                •
                                <span>채팅{}</span>
                            </div>
                        </Link>
                    </article>
                    <article className={section4.card}>
                        <Link href="#" className={section4.cardLink}>
                            <div className={section4.cardImg}>
                                <img src=""/>
                            </div>
                            <div className={section4.cardDesc}>
                                <h2 className={section4.cardTitle}>{}</h2>
                                <div className={section4.cardPrice}>{}</div>
                                <div className={section4.cardAddress}>{}</div>
                            </div>
                            <div className={section4.cardCount}>
                                <span>관심{}</span>
                                •
                                <span>채팅{}</span>
                            </div>
                        </Link>
                    </article>
                </div>
                <div id={section4.moreList}>
                    <Link href={"/view/item_list"}>인기매물 더 보기</Link>
                </div>
            </div>
        </section>
    )
}