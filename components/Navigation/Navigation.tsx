'use client'
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation'

const links = [
    {path: '/', name: 'PORTFOLIO'},
    {path: '/about', name: 'ABOUT ME'},
    {path: '/contact', name: 'CONTACT'}
]

export const Navigation = () => {
    const path = usePathname()
    return (
        <nav className={'self-end w-[360px] flex justify-between mb-[15px] text-[22px] sm:hidden'}>
            {links.map((link, index) => <Link className={`transition ease-linear delay-400 duration-400 border-b-[3px] border-solid ${path===link.path?'border-white/100':' border-white/0'} hover:border-white/100`} key={index} href={link.path}>{link.name}</Link>)}
        </nav>
    );
};

