import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({ totalPages, page, changePage }) => {
    const pagesArray = usePagination(totalPages)

    return (
        <div className="pagination">
            {pagesArray.map(i =>
                <span
                    onClick={() => changePage(i)}
                    key={i}
                    className={i === page ? 'pageItem activePage' : 'pageItem'}
                >{i}</span>
            )}
        </div>
    )
}

export default Pagination