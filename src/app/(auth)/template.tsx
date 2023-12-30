'use client'
import { ReactNode, useState } from "react";

import styles from './auth.module.scss';

export default function AuthLayaut({ children }: { children: ReactNode }) {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const actionSabmit=(data:FormData)=>{
        console.log('SUBMIT',[...data])
    }

    return (


        <div className={styles.authWrap}>
            {children}
            <div className={styles.authBlock}>
                <form action={actionSabmit}>
                    <input name="login" value={login} onChange={event => setLogin(event.target.value)} placeholder="login" />
                    <input name="password" value={pass} onChange={event => setPass(event.target.value)} placeholder="password" />
                    <input type="submit" value={'Sabmit'} />
                </form>
            </div>
        </div>

    )
}