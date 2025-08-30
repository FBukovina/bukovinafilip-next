import Link from 'next/link'

export default function FeaturedProjectCard({
  title,
  kind,
  segment,
  tagline,
  href,
}: {
  title: string
  kind: 'App' | 'Web'
  segment: string
  tagline: string
  href?: string
}) {
  return (
    <div className="card flex flex-col justify-between p-8 bg-pink-50 md:row-span-2 hover:-translate-y-1 transition-transform">
      <div className="flex flex-wrap gap-2">
        <span className="badge">{kind}</span>
        <span className="badge">{segment}</span>
      </div>
      <p className="mt-8 text-3xl font-bold leading-tight">{tagline}</p>
      <div className="mt-8 flex items-center justify-between">
        <h3 className="text-2xl font-semibold">{title}</h3>
        {href && (
          <Link href={href} target="_blank" className="button">
            Visit
          </Link>
        )}
      </div>
    </div>
  )
}
