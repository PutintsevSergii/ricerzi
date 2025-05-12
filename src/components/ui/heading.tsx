import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
  level: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export function Heading({ children, level, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  return <Tag className={className}>{children}</Tag>
} 