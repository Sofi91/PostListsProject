import { useMemo } from "react";

export const usePagination = (totalPages) => {
    return useMemo(() => {
        const result = []
        for (let i = 1; i <= totalPages; i++) {
            result.push(i)
        }
        return result
    }, [totalPages])

}