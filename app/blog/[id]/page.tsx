import Image from 'next/image'

interface PostEdit {
  params: {
    id: string,
  }
}

export default function BlogPost(props: PostEdit) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>BlogPost id: + " " + {props.params.id}</div>
      <div>BlogPost Heading: + " " + {props.params.id}</div>
      <div>BlogPost image: + " " + {props.params.id}</div>
      <div>BlogPost content: + " " + {props.params.id}</div>
    </main>
  )
}
