import React from 'react';
import Link from "next/link";
import {yanoneKaffeesatz} from "@/common/fonts";



export const Header = () => {


    return (
        <div className={`${yanoneKaffeesatz.variable} font-yanon text-[24px]`}>
            <Link href={'/'}>PORTFOLIO</Link>
            <Link href={'/about'}>ABOUT ME</Link>
            <Link href={'/contact'}>CONTACT</Link>
        </div>
    );
};

