import styles from "../../styles/SignUp.module.css"
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import { useState,useEffect } from "react";

export default function SignUp(){
    return(
        <div className={styles.content}>
            <div className={styles.main}>
                <form method="post" action="" className={styles.SignUpBox}>
                    <strong>회원가입</strong>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.username} type="text" name="username" placeholder="아이디"/>
                        <label for="username">아이디 입력</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.password} type="password" name="password" placeholder="비밀번호"/>
                        <label for="password">비밀번호 입력</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.chackPW} type="password" name="chackPW" placeholder="비밀번호 확인"/>
                        <label for="password">비밀번호 확인</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.name} type="text" name="name" placeholder="이름"/>
                        <label for="name">이름 입력</label>
                    </div>
                    <div className={styles.inputBox}>
                        <input className={styles.inputs} id={styles.phonenum} type="text" name="phonenum" placeholder="휴대폰번호"/>
                        <label for="phonenum">휴대폰 번호 (숫자만 입력)</label>
                    </div>
                    <input className={styles.submitBtn} type="submit" value="회원가입"/>
                    <div className={styles.linkBox}>
                        <p>이미 계정이 있으신가요?</p>
                        <Link id={styles.link}  href={"/login/SignIn"}>로그인&gt;</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}