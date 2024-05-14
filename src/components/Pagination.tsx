import './pagination.css';

import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import ReactPaginate from 'react-paginate';

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
  offset: number;
}

interface PaginationProps {
  totalCount?: number;
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  isResetLastPage?: boolean;
}

const Pagination = (props: PaginationProps) => {
  const {
    totalCount,
    pagination,
    setPagination,
    isResetLastPage = false,
  } = props;
  const [saveTotalCount, setSaveTotalCount] = useState(totalCount || 1);

  const totalPage = Math.ceil(saveTotalCount / pagination.pageSize);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const { selected } = selectedItem;
    setPagination({
      ...pagination,
      pageIndex: selected + 1,
      offset: selected * pagination.pageSize,
    });
  };

  const resetPageIndex = isResetLastPage ? totalPage : 1;

  useEffect(() => {
    if (totalCount !== undefined) {
      setSaveTotalCount(totalCount || 1);
    }
  }, [setPagination, totalCount]);

  useEffect(() => {
    if (pagination.pageIndex > totalPage) {
      setPagination((prev) => ({
        ...prev,
        pageIndex: resetPageIndex,
      }));
    }
  }, [pagination.pageIndex, setPagination, totalPage, resetPageIndex]);

  return (
    <ReactPaginate
      pageCount={totalPage}
      onPageChange={handlePageClick}
      forcePage={pagination.pageIndex - 1}
      containerClassName="pagination"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
