// Ignore Naming of this page (did not change name due to time restriction of project)

// This code is responsible for calculating number of pages to be traversed in pagination present in footer

export default function SelectRowsOfCurrentPage(page, data) {
    return data.slice(page * 10, (page + 1) * 10);
}