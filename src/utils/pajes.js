export const getPageCounts = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}