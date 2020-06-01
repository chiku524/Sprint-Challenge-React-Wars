// Write your Character component here
import React, { useEffect, useState } from 'react';


function Character({props, people, nextPage}){
    const [character, setCharacter] = useState(props);

    useEffect(() => {
        setCharacter(props.results)
    }, [props.results])

    console.log(character);

    return (
        <h2>Person Name: {people.name}</h2>
    )
}

export default Character;