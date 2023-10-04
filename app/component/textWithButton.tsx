'use client';

import Button from "./button";

export default function TextWithButton({ text, buttonText,action }: { text: string; buttonText:string, action?:()=>void}) {
    
    return (
        <div>
            <p className="text-lg mb-5">{text}</p>
            <Button title={buttonText} action={action} isButtonStyle={true} style="border border-red-200 px-8 py-3 text-white bg-cyan-900 rounded-lg"/>
        </div>
    )
}