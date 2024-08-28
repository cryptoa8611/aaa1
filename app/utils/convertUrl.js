import urlMappings from "./urlMappings";
/**
 * Chuyển đổi URL giữa các ngôn ngữ
 * @param {string} currentPath - Đường dẫn hiện tại
 * @param {string} currentLocale - Ngôn ngữ hiện tại ('vi' hoặc 'en')
 * @returns {string} - Đường dẫn mục tiêu
 */
export function convertUrl(currentPath, currentLocale) {
    const mappings = urlMappings[currentLocale];
    return mappings[currentPath] || currentPath;
}