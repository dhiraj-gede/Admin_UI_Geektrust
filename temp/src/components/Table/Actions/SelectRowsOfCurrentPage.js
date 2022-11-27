export default function SelectRowsOfCurrentPage(page, data) {
    return data.slice(page * 10, (page + 1) * 10);
  }