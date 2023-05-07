import { Pagination } from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TablePagination = (props) => {
  const [pageItems, setPageItems] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    let items = [];
    for (let page = 1; page <= props.pages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === activeTab}
          onClick={(e) => onClickItemMenu(e, page)}
        >
          {page}
        </Pagination.Item>
      );
    }
    setPageItems(items);
  }, [activeTab]);

  const onClickItemMenu = (event, page) => {
    event.preventDefault();
    const pageNumber =
      page === 'prev' ? activeTab - 1 : page === 'next' ? activeTab + 1 : page;
    if (!isNaN(pageNumber)) {
      setActiveTab(pageNumber);
      props.onPaginatedItemClick(pageNumber);
    }
  };

  return (
    <Pagination>
      <Pagination.Item onClick={(e) => onClickItemMenu(e, 'prev')}>
        Prev
      </Pagination.Item>
      {pageItems}
      <Pagination.Item onClick={(e) => onClickItemMenu(e, 'next')}>
        Next
      </Pagination.Item>
    </Pagination>
  );
};

export default TablePagination;
