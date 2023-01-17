import section5 from '../../styles/section_search.module.css'
import Link from 'next/link'

export default function Section_bottom(){
    return(
        <section className={section5.contents}>
            <h3>
                <Link href={""} className={section5.hotSearch}>중고거래 인기검색어</Link>
            </h3>
            <ul id={section5.searchList}>
                <li><Link href={""} className={section5.searchItem}>자전거</Link></li>
                <li><Link href={""} className={section5.searchItem}>의자</Link></li>
                <li><Link href={""} className={section5.searchItem}>아이폰</Link></li>
                <li><Link href={""} className={section5.searchItem}>냉장고</Link></li>
                <li><Link href={""} className={section5.searchItem}>노트북</Link></li>
                <li><Link href={""} className={section5.searchItem}>패딩</Link></li>
                <li><Link href={""} className={section5.searchItem}>아이패드</Link></li>
                <li><Link href={""} className={section5.searchItem}>모니터</Link></li>
                <li><Link href={""} className={section5.searchItem}>스타벅스</Link></li>
                <li><Link href={""} className={section5.searchItem}>책상</Link></li>
            </ul>
        </section>
    )
}