import NextImage, { ImageProps as NextImageProps } from 'next/image'

interface ImageProps extends Omit<NextImageProps, 'src'> {
  src: string
}

export function Image({ src, alt, className = '', ...props }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      {...props}
    />
  )
} 