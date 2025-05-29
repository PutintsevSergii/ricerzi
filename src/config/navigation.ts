export const navigation = {
  lv: [
    { name: 'Sākums', href: '/' },
    { name: 'Par mums', href: '/about' },
    { name: 'Kontakti', href: '/contacts' },
  ],
  pl: [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/about' },
    { name: 'Kontakt', href: '/contacts' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contacts' },
  ],
  ru: [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '/about' },
    { name: 'Контакты', href: '/contacts' },
  ],
} as const;

export const languages = [
  { code: 'lv', name: 'Latviešu' },
  { code: 'pl', name: 'Polski' },
  { code: 'en', name: 'English' },
  { code: 'ru', name: 'Русский' },
] as const; 