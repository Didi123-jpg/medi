'use client';

import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import log from '../../public/footerlogo.png';
import { base, data, list } from "../constant";

export default function Footer() {
    return <div className="flex px-8 py-12 bg-cyan-950">
      <div className="flex w-full gap-10">
        <section className="py-6 flex gap-8 flex-col">
          <div className="relative">
            <Image src={log} width={200} height={70} alt='logo' className=" object-contain"/>
          </div>
          <div className="gap-3 flex">
            {list.map((item) => <SocialIcon key={item} network={item} style={{ width: 25, height: 25 }} />)}
          </div>
        </section>
            <section className="p-6 flex-1 gap-5">
                <div className="grid grid-cols-3 gap-10">
                    {data.map(({ name }) => <div key={name} className="pb-4 flex flex-col gap-3">
                        <span>{name}</span>
                        <div className="border p-2" /></div>)}
                </div>
          <div className="mt-5 flex gap-5 item-center justify-center">
            {base.map((item)=><span key={item} className="">{item}</span>)}
          </div>
        </section>
      </div>
    </div>
}