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

        {/* Our Path. Our Rule. Section */}
        {data.ruleTitle && (
          <section className="mb-16 mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">{data.ruleTitle}</h2>
            <div className="prose prose-lg mx-auto text-gray-800 mb-6 text-left">
              {data.ruleContent?.split('\n').map((line: string, idx: number) => (
                <p key={idx}>{line}</p>
              ))}
              {data.rulePillars && (
                <ul className="list-disc pl-6 mt-4">
                  {data.rulePillars.map((pillar: string, idx: number) => (
                    <li key={idx}>{pillar}</li>
                  ))}
                </ul>
              )}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <a
                href="/documents/rule-pl.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download the Rule (PL)
              </a>
              <a
                href="/documents/rule-lv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Download the Rule (LV)
              </a>
            </div>
          </section>
        )}
      </div>
    </main>
  )
} 