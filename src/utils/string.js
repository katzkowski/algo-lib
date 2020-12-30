// String utils

/**
 * Returns camel case variant of initial string.
 * @param {String} str initial string 
 */
export const camelCase = str => str
    .replaceAll("-", " ")
    .split(' ')
    .map(s => (s.slice(0,1).toUpperCase() + s.slice(1).toLowerCase()))
    .join('')
    .trim()
    .replace(/\w/, (c) => c.toLowerCase());
