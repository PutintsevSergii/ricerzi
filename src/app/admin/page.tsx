'use client'

import { useEffect } from 'react'
import Script from 'next/script'

export default function AdminPage() {
  useEffect(() => {
    // Initialize Decap CMS
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])

  return (
    <>
      <Script
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"
        strategy="beforeInteractive"
      />
      <div id="nc-root" />
    </>
  )
} 