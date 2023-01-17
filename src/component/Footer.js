import SignFooter from "./SignFooter";
import Default_footer from "./Default_footer";
import { useRouter } from 'next/router'

export default function Footer(){
    const route = useRouter();
    function login(){
        if(route.pathname === "/login/SignIn"||route.pathname === "/login/SignUp"){
            return(
                <SignFooter/>
            )
        }
        else{
            return(
                <Default_footer/>
            )
        }
    }
    return(
        login()
    )
}