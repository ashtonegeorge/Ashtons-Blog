import { BlogHome, Navbar } from '../components';
import { getPosts } from '../services';
import Image from 'next/image';

export default function Blog({ posts }) {

  return (
      <div className="flex relative h-[100vh] overflow-x-hidden">

        <Image
          src={"/../public/img/wave-lg.png"}
          width='1000'
          height='1000'
          className='fixed z-0 w-[100vw] h-[100vh]'
          quality={100}
        />

        <div className="pt-24 w-full z-1 absolute top-1">
            <BlogHome className='absolute top-0 overflow-auto' posts={posts}/>
        </div>
    
        <Navbar progressVisible={false}/>

      </div>    
    )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts }
  }
}