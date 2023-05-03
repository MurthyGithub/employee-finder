import {Pagination} from 'react-bootstrap';
import React from 'react';

const TablePagination = (props) => {
    let activeTab = 1;
    let  items = [];
    for (let page = 1; page <= 6; page++) {
         items.push(
             <Pagination.Item key={page} active={page === activeTab} onClick={(e) => onClickItemMenu(e, page)}>
                 {page}
             </Pagination.Item>,
         );
     }
   
    const onClickItemMenu = (event, page) => {
        activeTab = page;
        props.onPaginatedItemClick(page);
    }
    
    return (
        
        <Pagination>
             <Pagination.Item>Prev</Pagination.Item>
             {items}
             <Pagination.Item>Next</Pagination.Item>
        </Pagination>
    )      
}

export default TablePagination;
