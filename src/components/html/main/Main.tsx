'use client'
import Redux from "@/components/storeProvider/StoreProvider";
import { testAdd } from "@/redux/Slices/testSlice";
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";




export default function Main({children}:{children:ReactNode}){
    const dispatch=useDispatch();
    return(
        <Redux>
        <main>
            {children}
            <button onClick={()=>dispatch(testAdd({}))}>test add</button>
        </main>
        </Redux>
    )
}