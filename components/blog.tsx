
import Image from 'next/image'

export default function Blog({articles}){
    const posts = articles.slice(0,3)
    return(
        <div className="container mx-auto m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {   
                    posts.map(article =>(
                        <div className='m-auto' key={article.slug}>
                            
                            <Image src={article.feature_image} width={320} height={200} quality={100}/>
                            <h1>{article.title}</h1>

                        </div>
                    ))
                }

        </div>
    )
}