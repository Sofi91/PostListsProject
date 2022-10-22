import { useMemo } from "react"

export const useSorted = (posts, sort) => {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort] > b[sort] ? 1 : -1)
        }
        return posts
    }, [posts, sort])

}


export const useFilter = (posts, sort, query) => {
    const sortedPosts = useSorted(posts, sort)
    return useMemo(() => {
        return sortedPosts.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
    }, [sortedPosts, query])
}