/**
 *
 *@function SelectRowsOfCurrentPage
 * @param {Number} page - current page number.
 * @param {obj[]} data - Array of rows.
 *@returns returns filtered rows from given data.
 *
 */

export default function SelectRowsOfCurrentPage(page, data) {
    return data.slice(page * 10, (page + 1) * 10);
}