// Write your Character component here
import React, { useEffect, useState } from 'react';
import Card from './Card';


function Character({props, people, nextPage}){
    const [characters, setCharacters] = useState(people);

    useEffect(() => {
        setCharacters(people)
    }, [people, characters])

    return (
        <div className='cardContainer'>
            {people.map((character, index) => {
                return <Card character={character} key={index} />
            })}
        </div>
    )
}

export default Character;