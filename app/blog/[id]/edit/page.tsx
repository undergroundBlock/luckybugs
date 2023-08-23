import PostForm from '@/components/postForm/PostForm'
import Image from 'next/image'

interface PostEditProps {
  params: {
    postId: string,
  }
}

export default function EditBlogPost(props: PostEditProps) {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Post Edit</h1>
      <PostForm postId={props.params.postId} />
    </main>
  )
}
