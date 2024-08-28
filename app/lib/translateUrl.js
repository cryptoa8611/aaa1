export function translateUrl(url, lang) {
  const translations = {
    '/contact': '/lien-he',
    '/about': '/gioi-thieu',
    '/news': '/tin-tuc',
    '/home': '/trang-chu',
    '/en': '/vi'
  };

  // Chuyển đổi URL nếu có bản dịch tương ứng
  return translations[url] ? (lang === 'vi' ? translations[url] : url) : url;
}