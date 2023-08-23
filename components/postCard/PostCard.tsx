import Post from '@/types/Post'
import Image from 'next/image'
import Link from 'next/link'


export default function PostCard(props: Post) {
    
    const { id, title, body } = props
    const postId: string = id.toString()
    const titleForImage = title.replace(' ', '').slice(0, 2).toUpperCase()

    return (
        <li className='rounded-lg shadow-lg bg-neutral-700'>
            <Image className='rounded-t-lg' src={`https://fakeimg.pl/600x400?text=Post ${titleForImage}`} width='600' height='400' alt={title} />
            <Link href={`/blog/${postId}`}>
                <div className='p-4'>
                    <h4 className='text-xl text-neutral-50 font-medium'>{title}</h4>
                    <p className='text-neutral-300'>{body.slice(0, 50)}</p>
                </div>
            </Link>
        </li>
    )
}