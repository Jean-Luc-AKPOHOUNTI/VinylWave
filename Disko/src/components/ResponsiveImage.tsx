interface ResponsiveImageProps {
  src: string
  alt: string
  className?: string
  fallback?: string
}

export default function ResponsiveImage({ src, alt, className = '', fallback = '/images/placeholder.jpg' }: ResponsiveImageProps) {
  return (
    <img 
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const target = e.target as HTMLImageElement
        target.src = fallback
      }}
      loading="lazy"
    />
  )
}