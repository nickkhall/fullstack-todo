export const sortObjArrByOrder = (arr: {}[], sortType: string, sortOrder: string): {}[] | null => {
  const a = new Array(...arr);

  if (a?.length) {
    return a.sort((a: any, b: any) => {
      if (typeof a[sortType] === 'boolean') {
        if (!a[sortType] && b[sortType]) return sortOrder === 'asc' ? 1 : -1;
        if (a[sortType] && !b[sortType]) return sortOrder === 'asc' ? -1 : 1;
        return 0
      }

      if (a[sortType] > b[sortType]) return (sortOrder === 'asc' ? 1 : -1);
      if (a[sortType] < b[sortType]) return (sortOrder === 'asc' ? -1 : 1);
      return 0;
    })
  }

  return null;
}
