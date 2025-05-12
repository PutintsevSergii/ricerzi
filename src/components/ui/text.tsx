import { ReactNode } from 'react'

interface TextProps {
  children: ReactNode
  className?: string
}

export function Text({ children, className = '' }: TextProps) {
  return <p className={className}>{children}</p>
} 