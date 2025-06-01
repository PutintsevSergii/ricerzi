export const navigation = {
  lv: [
    { name: 'Sākums', href: '/' },
    { name: 'Par mums', href: '/about' },
    { name: 'Dokumenti', href: '/documents' },
  ],
  pl: [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/about' },
    { name: 'Dokumenty', href: '/documents' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Documents', href: '/documents' },
  ],
  ru: [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Документы', href: '/documents' },
  ],
} as const;

export const languages = [
  { code: 'lv', name: 'Latviešu' },
  { code: 'pl', name: 'Polski' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
] as const; 