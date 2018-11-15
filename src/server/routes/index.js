import subjects from './subjects';
import posts from './posts';

export default (router) => {
  subjects(router);
  posts(router);
};
