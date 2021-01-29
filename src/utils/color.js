import { camelCase } from "./string"

// color utils

/**
 * Calculate a gradient from the first two tags of an algorithm.
 * @param {Array} tags
 * @param {Object} theme
 */
export const calcGradient = (tags, theme) => {
  const firstColor = theme.color.tag[camelCase(tags[0])]
  // if only 1 tag provided, use firstColor as secondColor
  const secondColor =
    tags[1] !== undefined ? theme.color.tag[camelCase(tags[1])] : firstColor
  return `linear-gradient(45deg, ${firstColor}, ${secondColor})`
}
