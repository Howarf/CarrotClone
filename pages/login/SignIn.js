import styles from "../../styles/SignIn.module.css"
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useState,useEffect } from "react";

export default function SignIn(){
    return(
        <div className={styles.content}>
            <div className={styles.main}>
                <form method="post" action="" className={styles.signInBox}>
                    <strong>로그인</strong>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.username} type="text" name="username" placeholder="아이디"/>
                        <label for="username">아이디</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.password} type="password" name="password" placeholder="비밀번호"/>
                        <label for="password">비밀번호</label>
                    </div>
                    <div className={styles.linkBox}>
                        <Link id={styles.link} href={""}>비밀번호 찾기</Link>
                        <Link id={styles.link} href={""}>회원가입</Link>
                    </div>
                    <input className={styles.submitBtn} type="submit" value="로그인"/>
                </form>
            </div>
        </div>
    )
}