import React from 'react';
import {Navigation} from "@/components/Navigation";
import {back} from "@/common/background";
import {yanoneKaffeesatz} from "@/common/fonts";

export const Header = () => {

    return (
        <div style={back} className={`bg-cover bg-center h-[146px] ${yanoneKaffeesatz.variable} font-yanon font-light`}>
            <div className={'max-w-screen-xl my-0 mx-auto text-white h-full flex justify-between'}>
                <div className={'self-center tracking-[.5px] leading-[45px]'}>
                    <div className={'text-[45px]'}>Dmitry Khiliuk</div>
                    <div className={'text-[26px]'}>Front-end developer</div>
                </div>
                <Navigation/>
            </div>
        </div>
    );
};

