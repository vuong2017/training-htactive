import {
  getPosts,
  getPostsId,
  insertPosts,
  updatePosts,
  deletePosts,
} from '../controllers/posts'

export default (router) => {
  router.get('/post/:idSubjects/:idPosts', getPostsId)
  router.get('/posts/:idSections', getPosts)
  router.post('/posts', insertPosts)
  router.post('/posts/update', updatePosts)
  router.post('/posts/delete', deletePosts)
}
