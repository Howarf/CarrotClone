import styles from "../componentModule/Header.module.css"
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useState,useEffect } from "react";

export default function Default_header(){
    const route = useRouter();
    let [Session,setSession] = useState("로그인");
    useEffect(() => {
        //세션 체크후 있을때 로그인글자 채팅하기로 변경
    })
    return(
        <div className={styles.case}>
            <div className={styles.Header}>
                <Link href="/"><img id={styles.logo} src="/images/logo.png" alt="순무마켓"/></Link>
                <ul className={styles.nav}>
                    <li><Link href={"/"} className={styles.Link} id={route.pathname === "/" ? styles.select:''}>중고거래</Link></li>
                    <li><Link href={"/view/item_list"} className={styles.Link} id={route.pathname === "/view/item_list" ? styles.select:''}>매물보기</Link></li>
                </ul>
                <div className={styles.search}>
                    <span id={styles.inputBox}>
                        <span>
                            <input placeholder="물품이나 동네를 검색해보세요"/>
                        </span>
                    </span>
                    <span id={styles.btns}>
                        <button onClick={()=>Router.push("/login/SignIn")}>로그인</button>
                        <button onClick={()=>Router.push("/login/SignUp")}>회원가입</button>
                    </span>
                </div>
            </div>
        </div>
    )
}