import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const { BLOG_URL, CONTENT_API_KEY } = process.env

type Post = {

    title: string
    slug: string
}

async function getPosts() {
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image`).then
        ((res) => res.json())

    const posts = res.posts
    return posts
}

export const getStaticProps = async ({ params }) => {

    const posts = await getPosts()
    return {
        revalidate: 10,
        props: { posts }
    }
}

export default function Home({ posts }) {




    return (
        <div>
            <div className='h-64 flex bg-black mb-8'>
                <div className='m-auto'>
                    <h1 className='text-gray-300 text-7xl font-bold ' >SEIDA  BLOG</h1>
                </div>

            </div>
            <h1 className='text-5xl text-gray-400 text-center pb-8'>WHAT WE GOT TO SAY</h1>
            <hr className='w-64 border-gray-500 my-1 mx-auto' />
            <hr className='w-36 border-gray-500 my-1 mx-auto pb-8' />
            <div className='container mx-auto'>

                <div className="container mx-auto m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 col-auto">
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

                </div>
            </div>
        </div>
    )


}




