'use client'

import { useContent } from '@/hooks/useContent'
import { useParams } from 'next/navigation'
import { Icon } from '@iconify/react'

export default function Documents() {
  const params = useParams()
  const lang = params.lang as string
  const { data } = useContent(`pages/documents.${lang}`)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.documents?.map((doc: any, index: number) => (
            <a
              key={index}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
            >
              <Icon icon={`mdi:${doc.icon}`} className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">{doc.title}</h3>
              <p className="text-sm text-gray-600 text-center">{doc.description}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
} 