import section2 from '../../styles/section_white.module.css'
import Link from 'next/link'

export default function Section_2(){
    return(
        <section className={section2.contents}>
            <div>
                <div className={section2.contents_Img}>
                    <img src='/images/image2.webp'/>
                </div>
                <div className={section2.contentsText}>
                    <h1>우리 동네<br/>중고 직거래 마켓</h1>
                    <p>동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.</p>
                    <div className={section2.contentsBtn}>
                        <Link href={"/item_list"} className={section2.btn} id={section2.btn1}>인기매물 보기</Link>
                        <Link href={""} className={section2.btn} id={section2.btn2}>믿을 수 있는 중고거래</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}