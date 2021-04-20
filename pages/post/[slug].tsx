import Link from 'next/link'
import { useRouter } from 'next/router'

import { useState } from 'react'

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getPost(slug: string) {
    const res = await fetch(
        `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html,custom_excerpt`
    ).then((res) => res.json())

    const posts = res.posts


    return posts[0]
}

export const getStaticProps = async ({ params }) => {

    const post = await getPost(params.slug)
    return {
        props: { post },
        revalidate: 10
    }
}

export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}

type Post = {
    title: string
    html: string
    slug: string
    custom_excerpt: string
}

const Post: React.FC<{ post: Post }> = (props) => {

    const { post } = props
    
    
    const [enableLoadComments, setEnableLoadComments] = useState<boolean>
        (true)
    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }





    function loadComments() {
        setEnableLoadComments(false)
            ; (window as any).disqus_config = function () {
                this.page.url = window.location.href
                this.page.identifier = post.slug
            }

        const script = document.createElement('script')
        script.src = 'https://4p-test-ghostcms.disqus.com/embed.js'
        script.setAttribute('data-timestamp', Date.now().toString())

        document.body.appendChild(script)

    }

    return (
        <div className='container mx-auto'>
          
            <h1 className='text-center text-5xl mt-8'> {post.title}</h1>
            {console.log(post.html)}
            <p className='max-w-3xl my-8 font-semibold mx-auto'>{post.custom_excerpt}</p>
            
            <div className='px-64 ' dangerouslySetInnerHTML={{ __html: post.html }} ></div>
            {enableLoadComments && (
                <p className='w-48 mx-auto py-8 font-bold ' onClick={loadComments}>
                    LOAD COMMENTS
                </p>
            )}

            <div className='my-8 md:px-44' id="disqus_thread"></div>


        </div>
    )
}
export default Post