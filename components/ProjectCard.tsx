import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  title, kind, segment, description, image, href
}:{
  title: string,
  kind: 'App'|'Web',
  segment: string,
  description: string,
  image: string,
  href?: string
}){
  return (
    <div className="card overflow-hidden">
      <div className="grid md:grid-cols-[2fr,3fr] gap-0">
        <div className="p-6 flex flex-col gap-2">
          <span className="badge">{kind}</span>
          <span className="badge">{segment}</span>
          <h3 className="text-2xl font-semibold mt-2">{title}</h3>
          <p className="text-neutral-700">{description}</p>
          {href && <Link href={href} target="_blank" className="mt-4 button w-fit">Visit</Link>}
        </div>
        <div className="relative h-72 md:h-auto">
          <Image src={image} alt={title} fill sizes="50vw" className="object-cover"/>
        </div>
      </div>
    </div>
  )
}
