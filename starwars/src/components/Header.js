import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


function Header({add1ToPage}){
    return(
        <PaginationContainer>
            <h1 className='Header'>Characters</h1>
            <Pagination aria-label='PageNavigation' style={{display: 'flex', listStyle: 'none', justifyContent: 'center'}}>
                <PaginationItem>
                    <PaginationLink first href='' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href='' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#' >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href='#' onClick={add1ToPage}>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next href='#' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last href='#' />
                </PaginationItem>
            </Pagination>
        </PaginationContainer>
        
    )
}

export default Header;