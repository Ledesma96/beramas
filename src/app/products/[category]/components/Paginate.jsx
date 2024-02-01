import React from 'react'
import Link from 'next/link'

const Paginate = ({nextPage, prevPage, proxPage, antPage, totalPages, setPage, page}) => {
    const handlebtn = (num) => {
        setPage(page + num)
    }
    console.log(nextPage, prevPage, proxPage, totalPages, page);
  return (
    <>
    {totalPages > 1 && <div className='paginate'>
                {prevPage && <Link className='paginate_link' onClick={() => handlebtn(-1)} href=''>anterior</Link>}

                {(antPage - 1) > 0 && <Link className='paginate_link' href='' onClick={() => setPage(antPage -1)}>{antPage -1}</Link>}

                {prevPage && <Link className='paginate_link' href='' onClick={() => setPage(antPage)}>{antPage}</Link>}

                {page && <p className='paginate_p'>{page}</p>}

                {nextPage && <Link className='paginate_link' href='' onClick={() => setPage(proxPage)}>{proxPage}</Link>}

                {((proxPage + 1) <= totalPages && (proxPage + 1) > 1)  && <Link className='paginate_link' href='' onClick={() => setPage(proxPage + 1)}>{proxPage + 1}</Link>}

                {nextPage && <Link className='paginate_link' onClick={() => handlebtn(1)} href=''>siguiente</Link>}
            </div>}
    </>
  )
}

export default Paginate