
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Blog({ articles }) {
    const posts = articles.slice(0, 3)
    return (
        <div>
            <h1 className='text-gray-400 text-5xl text-center pt-16 pb-8'>CHECK OUR BLOG OUT</h1>
            <hr className='w-64 border-gray-500 my-1 mx-auto' />
            <hr className='w-36 border-gray-500 my-1 mx-auto pb-8' />
            <div className="container mx-auto m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">

                {
                    posts.map(article => (
                        <div className='m-auto' key={article.slug}>
                            <Link href="/post/[slug]" as={`/post/${article.slug}`}>
                                <a>

                                    <Image src={article.feature_image} width={320} height={200} quality={100} />
                                    <h1>{article.title}</h1>
                                </a>
                            </Link>


                        </div>
                    ))
                }
                <div></div>
                <Link href='/blog'>
                    <a className='font-bold mx-auto py-8 text-gray-500'>
                        <p >SEE MORE POSTS</p>
                    </a>
                </Link>
            </div>

        </div>
    )
}