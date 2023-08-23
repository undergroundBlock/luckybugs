import { usePathname } from 'next/navigation';
import { getPost } from "@/services/posts"
import Link from "next/link"
import Post from '@/types/Post';

interface PostEdit {
  params: {
    postId: string,
  }
}

export function generateMetadata(props: PostEdit) {

  return{
    title: `Post ${props.params.postId}`,
    description: `Post Description ${props.params.postId}`,
  }
}

export default async function BlogPost(props: PostEdit) {

  const {postId} = props.params

  const  data: Post = await getPost(postId)
  const {title, body} = data
  return (
    <>
    <header className=''>
      <h1>{title} - {postId}</h1>
      <Link href={`/blog/${postId}/Edit`}>Edit</Link>
      <button className='btn--red'>Delete</button>
      <p>{body}</p>
    </header>
    </>
  )
}
