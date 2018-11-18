export const ShowItemsPagination = (items,currentPage,perPage) => {
  const showItems = [...items]
  const start = currentPage * perPage
  return showItems.slice(start,start+perPage)
} 

export const ShowTotalPage = (items,perPage) => {
  return Math.ceil(items.length / perPage)
}