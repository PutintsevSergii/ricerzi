export const navigation = {
  lv: [
    { name: 'Sākums', href: '/' },
    { name: 'Par mums', href: '/about' },
    { name: 'Garīgums', href: '/spirituality' },
    { name: 'Pievienojies', href: '/join' },
    { name: 'Kontakti', href: '/contact' },
  ],
  pl: [
    { name: 'Strona główna', href: '/' },
    { name: 'O nas', href: '/about' },
    { name: 'Duchowość', href: '/spirituality' },
    { name: 'Dołącz', href: '/join' },
    { name: 'Kontakt', href: '/contact' },
  ],
  en: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Spirituality', href: '/spirituality' },
    { name: 'Join', href: '/join' },
    { name: 'Contact', href: '/contact' },
  ],
  ua: [
    { name: 'Головна', href: '/' },
    { name: 'Про нас', href: '/about' },
    { name: 'Духовність', href: '/spirituality' },
    { name: 'Приєднатися', href: '/join' },
    { name: 'Контакт', href: '/contact' },
  ],
} as const;

export const languages = [
  { code: 'lv', name: 'Latviešu' },
  { code: 'pl', name: 'Polski' },
  { code: 'en', name: 'English' },
  { code: 'ua', name: 'Українська' },
] as const; 