'use client'
import { savePost } from '@/services/posts'
import { useState } from 'react'

interface PostFormProps {
  postId: string,
}

export default function PostForm(props: PostFormProps) {
  const [title, setTitle] = useState<string>('')
  const [body, setBody] = useState<string>('')

  async function onSunbmit(e: React.FormEvent) {
    e.preventDefault()
    
    await savePost({id: props.postId, title, body})
  }

  return (
    <form onSubmit={onSunbmit}>
      {title} {body}
      <div className="post-form__block">
        <label className='post-form__lable'>Title</label>
        <input className='post-form__input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' />
      </div>
      <div className="post-form__block">
        <label className='post-form__lable'>Title</label>
        <textarea className='post-form__input ' rows={20} value={body} onChange={(e) => setBody(e.target.value)} placeholder='Title' />
      </div>
      <button type='submit' className='btn'>send</button>
    </form>
  )
}
