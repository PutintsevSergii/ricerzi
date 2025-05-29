'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Language {
  code: string
  name: string
  flag: string
}

interface LanguageSwitcherProps {
  languages: Language[]
  currentLang: string
}

export default function LanguageSwitcher({ languages, currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  // Get the path without the language prefix
  const pathWithoutLang = pathname.split('/').slice(2).join('/')
  const basePath = pathWithoutLang ? `/${pathWithoutLang}` : ''

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark">
          <span className="text-lg">{languages.find(lang => lang.code === currentLang)?.flag}</span>
          <span className="hidden sm:inline-block ml-1">{languages.find(lang => lang.code === currentLang)?.name}</span>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((lang) => (
              <Menu.Item key={lang.code}>
                {({ active }: { active: boolean }) => (
                  <Link
                    href={`/${lang.code}${basePath}`}
                    className={`${
                      active ? 'bg-gray-100' : ''
                    } ${
                      currentLang === lang.code ? 'bg-gray-50' : ''
                    } flex items-center px-4 py-2 text-sm text-gray-700`}
                  >
                    <span className="text-lg mr-2">{lang.flag}</span>
                    {lang.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} 