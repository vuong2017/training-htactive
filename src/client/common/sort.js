export const sortBy = (e, items, text, order) => {
  const sortName = e.target.id;
  var prev = text;
  var order = order;
  var sortingFunction = (a, b) => {
      var _a = a[sortName];
      var _b = b[sortName];
      if (typeof _a === "string" || typeof _b === "string") {
          _a = _a.toLowerCase();
          _b = _b.toLowerCase();
      }
      if (_a <= _b) return -1;
      return 1;
  };
  if (prev !== sortName) {
      order = false;
      items && items.sort(sortingFunction);
  } else {
      order = !order;
      items && items.reverse();
  }
  return {
      items,
      sortName,
      order,
  }
};

export const iconSort = (typeSort,text, order) => {
  if (typeSort === text) {
      return order ? "fa fa-sort-asc" : "fa fa-sort-desc";
  }
  return "fa fa-sort";
};