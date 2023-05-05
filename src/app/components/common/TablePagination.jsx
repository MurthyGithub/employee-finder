import {Pagination} from 'react-bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const TablePagination = (props) => {
    const [pageItems, setPageItems] = useState([]);
    const[activeTab, setActiveTab] = useState(1);   
   
     useEffect(() => {
        let  items = [];
        for (let page = 1; page <= props.pages; page++) {
            items.push(
                <Pagination.Item key={page} active={page === activeTab} onClick={(e) => onClickItemMenu(e, page)}>
                    {page}
                </Pagination.Item>,
            );
        }
        setPageItems(items);
     }, [activeTab])
   
    const onClickItemMenu = (event, page) => {
        event.preventDefault();
        setActiveTab(page);
        props.onPaginatedItemClick(page);
    }
    
    return (        
        <Pagination>
             <Pagination.Item>Prev</Pagination.Item>
             {pageItems}
             <Pagination.Item>Next</Pagination.Item>
        </Pagination>
    )      
}

export default TablePagination;
