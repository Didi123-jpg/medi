'use client';

import Image from "next/image";
import Button from "./button";
import TextWithButton from "./textWithButton";
import { buttonText, immediateButtonText, immediateText, text } from "../constant";
import { SocialIcon } from "react-social-icons";
import picture from '../../public/OIPS.png';

export default function HomeComponent() {
    const data = ['See All', 'Female Doctors', 'Female Doctors', 'Family / Primary Care Doctors', 'Pediatricians', 'Cancer Doctors', 'Book Online', 'Speaks Yoruba', 'Speaks Igbo', 'Speaks English']
    
    return (
        <div className="py-3 bg-cyan-950">
            <div>
                <div className="flex w-full py-12 px-8">
                    <div className="w-1/2">
                        <div className="relative w-2/3 h-[600px]">
                            <Image src={picture} alt="" fill className="w-[100%] h-[100%] object-cover" />
                        </div>
                    </div>
                <div className="w-1/2 gap-10 flex-col flex">
                    <div>
                        <span className="text-5xl">Find A Doctor Near You</span>
                    </div>
                    <div>
                        <p className="text-lg mb-5">Find a MediCare Doctor who is a perfect match</p>
                            <input placeholder="enter to find a doctor" type="text" className="w-full p-4 rounded-lg"/>
                    </div>
                    <div>
                        <p className="text-base mb-5">or get headstart by selecting category you would like to explore</p>
                        <div className="w-full flex gap-5 flex-wrap">
                            {data.map(item=><Button key={item} title={`${item}`} isButtonStyle={true} style="px-10 py-2 bg-cyan-900 rounded-lg hover:shadow-md"/>)}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full py-20 px-8 bg-white text-cyan-950">
                    <div className="w-1/2 flex flex-col gap-8">
                        <p className="text-3xl">Why Choose MediCare Health</p>
                        <p className="text-lg">When you visit MediCare Health, you can feel confident you’re being treated by expert doctors, nurses and other care providers who are innovative leaders in their chosen disciplines. Plus, you get all the benefits of an academic medical center, which means that you’ll gain access to advanced technology, treatments and research that may not be available elsewhere.
                        </p>
                        <TextWithButton text={text} buttonText={buttonText} />
                        <p className="text-3xl">Immediate Care</p>
                        <TextWithButton text={immediateText} buttonText={immediateButtonText}/>
                    </div>
                </div>
            </div>
        </div>
    )
}