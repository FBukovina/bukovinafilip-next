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
    <div className="card overflow-hidden flex flex-col group hover:-translate-y-1 transition-transform">
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <div className="flex flex-wrap gap-2">
          <span className="badge">{kind}</span>
          <span className="badge">{segment}</span>
        </div>
        <h3 className="text-2xl font-semibold mt-2">{title}</h3>
        <p className="text-neutral-700 flex-1">{description}</p>
        {href && (
          <Link
            href={href}
            target="_blank"
            className="mt-4 button w-fit"
          >
            Visit
          </Link>
        )}
      </div>
    </div>
  )
}
