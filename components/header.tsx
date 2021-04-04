import Link from 'next/link';
import Image from 'next/image';
export default function Header() {

    return (
        <div className="h-16 bg-black text-white flex justify-evenly">
            <div className='my-auto'>
                <Link href='/'>
                    <a className="text-gray-300 mx-2" >HOME</a>
                </Link>
                <Link href='/'>
                    <a className="text-gray-300">CONTACT</a>
                </Link>
                <Link href='/'>
                    <a className="text-gray-300 mx-2">ABOUT</a>
                </Link>
                <Link href='/blog'>
                    <a className="text-gray-300">BLOG</a>
                </Link>

            </div>
            <div className='my-auto flex'>
                <div className='mx-1'>
                    <Image src='/fb.svg' width={20} height={20} />

                </div>
                <div className='mx-1'><Image src='/ig.svg' width={20} height={20} /></div>
                <div className='mx-1'><Image src='/tik.svg' width={20} height={20} /></div>




            </div>

        </div>
    )

}