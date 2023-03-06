import Head from 'next/head'
import { PostCard, Categories, PostWidget } from './BlogComponents';
import { FeaturedPosts } from '../sections';

export default function BlogHome({ posts }) {
  const latestPosts = posts.map(item => item).reverse()


  return (
    <div className="container mx-auto px-10 mb-8" >
      <Head>
        <title>Ashton George Blog</title>
        <meta name="description" content='Learn Computer Science tips and tricks through blog posts about software and hardware from Ashton George.' />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {latestPosts.map((post) => <PostCard post={post.node} key={post.title} />)}
        </div>
          
        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
              <PostWidget />
              <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}

