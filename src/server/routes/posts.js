import {
  getPosts,
  getPostsId,
  deletePosts,
} from '../controllers/posts';

export default (router) => {
  router.get('/post/:idSubjects/:idPosts', getPostsId);
  router.get('/posts/:idSections', getPosts);
  router.get('/posts/delete/:idPosts', deletePosts);
};
