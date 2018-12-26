import {
  getSections,
  getFindById,
  insertItemSections,
  updateItemSections,
  deleteItems
} from '../controllers/sections'

export default (router) => {
  router.get('/getSections', getSections) 
  router.get('/getFindById', getFindById)
  router.post('/insertItemSections', insertItemSections)
  router.post('/updateItemSections', updateItemSections)
  router.post('/deleteItems', deleteItems)
}
