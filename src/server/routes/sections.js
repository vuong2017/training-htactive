import {
  getSections,
  getFindById,
  insertItemSections,
  updateItemSections,
  deleteItems
} from '../controllers/sections';

export default (router) => {
  router.get('/getSections', getSections); //http://localhost:2048/api/getSections
  router.get('/getFindById', getFindById); //http://localhost:2048/api/getFindById?sections_id=5bea79a387619c21c4483a46
  router.post('/insertItemSections', insertItemSections); //http://localhost:2048/api/insertItemSections
  router.post('/updateItemSections', updateItemSections); //http://localhost:2048/api/updateItemSections
  router.delete('/deleteItems', deleteItems); //http://localhost:2048/api/deleteItems (subjects_id, section_id)
};
