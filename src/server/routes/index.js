import subjects from './subjects'
import sections from './sections'
import posts from './posts'

export default (router) => {
  subjects(router)
  sections(router)
  posts(router)
}
