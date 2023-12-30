'use client'
import { store } from "@/redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";



export default function Main({children}:{children:ReactNode}){

    return(
        <Provider store={store}>
        <main>
            {children}
        </main>
        </Provider>
    )
}