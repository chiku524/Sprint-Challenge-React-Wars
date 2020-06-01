import React from 'react';
import {Pagination} from 'reactstrap';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

function Header({paginate}){
    // const pageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return(
        <PaginationContainer>
            <h1 className='Header'>Characters</h1>
            {/* <Pagination className = "cont">
                {pageNumbers.map(number => {
                    return <Pagination.Item className="clicker" onClick={() => paginate(number)} key={number}>{number}</Pagination.Item>
                })}
            </Pagination> */}
        </PaginationContainer>
        
    )
}

export default Header;