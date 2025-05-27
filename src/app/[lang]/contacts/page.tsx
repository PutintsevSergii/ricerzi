'use client'

import { useContent } from '@/hooks/useContent'
import { useParams } from 'next/navigation'
import { Icon } from '@iconify/react'

export default function Contacts() {
  const params = useParams()
  const lang = params.lang as string
  const { data } = useContent(`pages/contacts.${lang}`)

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.contactTitle}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{data.contactDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              {data.contactInfo.map((info: any, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Icon icon={`mdi:${info.icon}`} className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{info.label}</h3>
                    <p className="mt-1 text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Follow Us</h2>
            <div className="grid grid-cols-1 gap-6">
              {data.socialMedia.map((social: any, index: number) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <Icon icon={`mdi:${social.icon}`} className="w-6 h-6 text-blue-600" />
                  <span className="text-lg font-medium text-gray-900">{social.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 