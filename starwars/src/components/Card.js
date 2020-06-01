import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    color: black;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    background-color: lightgrey;
    max-widthL 350px;
    opacity: .5;
    margin: 2%;
    font-weight: bold;
`;

function Card({character, index}){
    return (
        <CardStyled>
            <h2>Name: {character.name} {"\n"} </h2>
            <h2>Birth Year: {character.birth_year} {"\n"} </h2>
            <h2>Eye Color: {character.eye_color} {"\n"}  </h2>
            <h2>Gender: {character.gender} {"\n"}  </h2>
            <h2>Height: {character.height}cm {"\n"}  </h2>
            <h2>Mass: {character.mass}kg {"\n"}  </h2>
        </CardStyled>
    )
}

export default Card;