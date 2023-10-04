'úse client';

interface IData{
    name: string;
}

export default function NavContent({ data }: { data: IData[] }) {
    
    return (
        <div className="flex mx-5 items-center justify-center gap-5">
            {data.map(({ name }) => <div key={name} className=" text-blue-900 text-lg hover:underline hover:underline-offset-8 hover:cursor-pointer">{name}</div>)}
        </div>
    )
}