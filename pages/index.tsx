import Intro from '../components/intro';
import About from '../components/about';
import Blog from '../components/blog';

const { BLOG_URL, CONTENT_API_KEY } = process.env

async function getArticles() {
    const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt,feature_image`).then
        ((res) => res.json())
       
        

    const articles = res.posts
    return articles
}

export const getStaticProps = async ({ params }) => {

    const articles = await getArticles()
    return {
        revalidate: 10,
        props: { articles }
    }
}

export default function Home({articles}) {
  return (
    <div>
        <Intro/>
        <About/>
        <Blog articles={articles}/>
    </div>
  )
}
