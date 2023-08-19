import PostForm from '@/components/postForm/PostForm'
import Image from 'next/image'

export default function EditBlogPost() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>EditBlogPost</div>
      <PostForm />
    </main>
  )
}
