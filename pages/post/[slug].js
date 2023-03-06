import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import WaveBackground from "../../public/img/wave-lg.png";
import Head from 'next/head';

import { getPosts, getPostDetails } from '../../services';

import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components/BlogComponents';
import { Navbar } from '../../components';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if(router.isFallback) {
    return <Loader />
  }

  return (

    <div className='relative'>
      <Head>
        <title>{post.title}</title>
        <meta name="description"  content={post.excerpt}/>
      </Head>
      <Image
          src={WaveBackground}
          width='1000'
          height='1000'
          className='fixed z-0 w-[100vw] h-[100vh]'
          quality={100}
      />

      <div className='container mx-auto px-10 pt-24 mb-8 relative'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
          <div className='col-span-1 lg:col-span-8'>
            {console.log('slug.js post.featuredImage.url -> ' + `${post.featuredImage.url}`)}
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </div>
          <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky top-8">
                <PostWidget slug={post.slug} categories={post.categories.map((category) => category.slug)} />
                <Categories />
              </div>
          </div>
        </div>
        <Navbar />
      </div>    
    </div>


  )
}

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { 
      post: data
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}