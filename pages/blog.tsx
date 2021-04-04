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
        <div className='container'>
            <h1 className='text-center'>Hello to my blog</h1>
            <div className="container m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 col-auto">
                {
                    posts.map(article => (
                        <div key={article.slug}>


                             <Link href="/post/[slug]" as={`/post/${article.slug}`}>
                                 <a>
                            <Image src={article.feature_image} width={320} height={200} quality={100} />
                            <h1>{article.title}</h1>
                            
                                <a>{article.title} </a>
                                </a>
                            </Link>

                        </div>
                    ))
                }

            </div>
        </div>
    )


}




