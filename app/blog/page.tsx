'use client';

import PostCard from '@/components/postCard/PostCard';
import { getPosts } from '@/services/posts';
import Post from '@/types/Post';
// import { Metadata } from 'next';
import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Blog | Psytech news ',
//   description: 'News on psytech festival',
// }



export default async function Blog() {
  const data = await getPosts()
  const posts: Post[] = data

  return (
    <>
      <header className='flex items-center mb-6'>
        <h1>Posts Page</h1>
        <Link className='btn ml-auto' href='blog/new'>new post</Link>
      </header>
      <div>
        <ul className='grid grid-cols-2 md:grid-cols-3 gap-4'>
          {posts.map((post) => (
              <PostCard key={post.id} {...post} />
          ))}
        </ul>
      </div>
    </>
  )
}
