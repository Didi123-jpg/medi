'use client';

export default function Button({ title, action,isButtonStyle,style }: { title: string; action?: () => void; isButtonStyle:boolean,style?:string }) {
    
    return <button type="button" onClick={action} className={isButtonStyle?style:"border h-10 border-blue-400 px-5 text-black shadow-lg rounded-xl"}>{title}</button>
}