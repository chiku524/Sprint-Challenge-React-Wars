import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import styled from 'styled-components';

const PaginationContainer = styled.div`
    display: flex;
    flex-direction: column;
`;


function Header({add1ToPage, skipToLast, subtract1ToPage}){
    return(
        <PaginationContainer>
            <h1 className='Header'>Characters</h1>
            <Pagination aria-label='PageNavigation' style={{display: 'flex', listStyle: 'none', justifyContent: 'center'}}>
                <PaginationItem>
                    <PaginationLink first href='' />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href='' onClick={subtract1ToPage} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink >2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink next onClick={add1ToPage} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink last onClick={skipToLast} />
                </PaginationItem>
            </Pagination>
        </PaginationContainer>
        
    )
}

export default Header;