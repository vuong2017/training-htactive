import {
  getSections,
  insertItemSections,
  updateItemSections,
  deleteItems
} from '../controllers/sections';

export default (router) => {
  router.get('/getSections', getSections);
  router.post('/insertItemSections', insertItemSections);
  router.put('/updateItemSections', updateItemSections);
  router.delete('/deleteItems', deleteItems);
};
