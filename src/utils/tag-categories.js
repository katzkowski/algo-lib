import { camelCase } from "./string"

// returns tag category or undefined
export const getTagCategory = tag => {
  const tagName = camelCase(tag.tag)
  return tagCategories[tagName] !== undefined
    ? tagCategories[tagName]
    : undefined // tag not defined in list below
}

// list of tags with their categories
// tagName: "category"
const tagCategories = {
  recursive: "type",
  backtracking: "type",
  divideAndConquer: "type",
  sorting: "application",
  search: "application",
  criticalSection: "application",
  dynamicProgramming: "type",
  nlp: "application",
}
