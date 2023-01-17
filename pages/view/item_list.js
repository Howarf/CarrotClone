import styles from "../../styles/itemList.module.css"
import Card from "../../src/component/Card"
import { useState } from "react"

export default function item_list(){
    let cList = [["관악구","강서구","강남구"],["전포동","수영구","해운대구"]];
    const title = "중고거래 매물";
    let [local,setLocal] = useState("");
    let [city,setCity] = useState("");
    const changeLocal = (e) =>{
        if(e.target.value === ""){
            setCity("");
        }
        setLocal(e.target.value);
    }
    const changeCity = (e) =>{
        setCity(e.target.value);
    }
    const cityList = () =>{
        switch(local){
            case "서울특별시":
                console.log(cList[0]);
                return(cList[0].map((el)=>(<option value={el} key={el}>{el}</option>)));
            case "부산광역시":
                return(cList[1].map((el)=>(<option value={el} key={el}>{el}</option>)));
        }
    }
    return(
        <div className={styles.content}>
            <h1 className={styles.title}>{local+" "+city+" "+title}</h1>
            <nav className={styles.selects}>
                <select name="local" onChange={changeLocal}>
                    <option value={""}>지역을 선택하세요</option>
                    <option value={"서울특별시"}>서울특별시</option>
                    <option value={"부산광역시"}>부산광역시</option>
                </select>
                <select name="city" onChange={changeCity} disabled={local === "" ? true : false}>
                    <option value={""}>동네를 선택하세요</option>
                    {cityList()}
                </select>
            </nav>
            <div className={styles.cardList}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}