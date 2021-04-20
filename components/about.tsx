import Image from 'next/image'
export default function About() {
    return (
        <div className='container mx-auto flex flex-col pt-16'>
            <h1 className='text-5xl text-gray-400 text-center pb-8'>WHO WE ARE</h1>
            <hr className='w-64 border-gray-500 my-1 mx-auto' />
            <hr className='w-36 border-gray-500 my-1 mx-auto pb-8' />
            <div className='md:flex mx-auto py-8'>
                <div className='text-center' >
                    <Image className='mx-auto ' src="/lorem.jpg" height={300} width={300} />
                </div>
                <div className='mx-16'>
                    <h1 className='text-3xl my-8'>LOREM IPSUM</h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec dui nunc.
                        Vitae turpis massa sed elementum tempus egestas.
             </p>
                </div>
            </div>



            <div className='flex flex-col-reverse md:flex-row mx-auto py-8'>

                <div className='mx-16'>
                    <h1 className='text-3xl my-8'>LOREM IPSUM</h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec dui nunc.
                        Vitae turpis massa sed elementum tempus egestas.
             </p>
                </div>
                <div className='text-center'>
                    <Image className='mx-auto' src="/lorem.jpg" height={300} width={300} />
                </div>
            </div>
            <div className='md:flex mx-auto py-8'>
                <div className='text-center' >
                    <Image className='mx-auto ' src="/lorem.jpg" height={300} width={300} />
                </div>
                <div className='mx-16'>
                    <h1 className='text-3xl my-8'>LOREM IPSUM</h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec dui nunc.
                        Vitae turpis massa sed elementum tempus egestas.
             </p>
                </div>
            </div>


            <div className='flex flex-col-reverse md:flex-row mx-auto py-8'>

                <div className='mx-16'>
                    <h1 className='text-3xl my-8'>LOREM IPSUM</h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec dui nunc.
                        Vitae turpis massa sed elementum tempus egestas.
             </p>
                </div>
                <div className='text-center'>
                    <Image className='mx-auto' src="/lorem.jpg" height={300} width={300} />
                </div>
            </div>
            <div className='md:flex mx-auto py-8'>
                <div className='text-center' >
                    <Image className='mx-auto ' src="/lorem.jpg" height={300} width={300} />
                </div>
                <div className='mx-16'>
                    <h1 className='text-3xl my-8'>LOREM IPSUM</h1>
                    <p className='w-96'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Non blandit massa enim nec dui nunc.
                        Vitae turpis massa sed elementum tempus egestas.
             </p>
                </div>
            </div>
        </div>
    )
}