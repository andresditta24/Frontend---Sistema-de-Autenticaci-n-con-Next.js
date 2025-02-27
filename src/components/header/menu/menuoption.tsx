"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface prop {
    text: string;
    path: string;

}

export default function MenuOpcionHeader({ text, path }: prop) {
    const ruta = usePathname();
  
    return (

        <li className='max-lg:border-b max-lg:py-3 px-3'>
            <Link href={path}   className={`hover:text-blue-600  ${(ruta===path)?"text-blue-600":''}  block font-semibold transition-all`}>{text} </Link>
        </li>



    );
}