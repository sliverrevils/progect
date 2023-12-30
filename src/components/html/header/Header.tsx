'use client'
import Redux from "@/components/storeProvider/StoreProvider";
import { ReduxStateT } from "@/redux/store";
import { useSelector } from "react-redux";




export default function Header(){
    const {count} = useSelector((state:ReduxStateT)=>state.test)
    return(
       
        <header>
            <h2>header : {count} </h2>
        </header>
        
    )
}