import Default_header from "./Defult_header";
import SignHeader from "./SignHeader";
import { useRouter } from 'next/router'

export default function Header(){
    const route = useRouter();
    function login(){
        if(route.pathname === "/login/SignIn"||route.pathname === "/login/SignUp"){
            return(<SignHeader/>)
        }
        else {
            return(<Default_header/>)
        }
    }
    return(
        login()
    )
}