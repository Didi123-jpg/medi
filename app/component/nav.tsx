'use client';

import Image from "next/image";
import Button from "./button";
import logo from '../../public/logo.png';
import NavContent from "./navcomp";
import { data } from "../constant";

export default function Navbar () {
    
    return <div className="bg-white px-8 py-3">
        <div className="relative flex justify-between items-center">
            <Image src={logo} alt="logo" className=" object-contain" width={200} height={100} quality={100} />
            <NavContent data={data}/>
            <Button title={'Press me'} />
        </div>
    </div>
}