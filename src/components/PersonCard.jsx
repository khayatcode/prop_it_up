import React, { useState } from 'react'

const PersonCard = (props) => {
    const { firstName, lastName, personAge, hairColor } = props;
    const [age, setAge] = useState(personAge)
    const addAge = () => {
        setAge(age + 1)
    }
    const reduceAge = () => {
        setAge(age - 1)
    }
    return (
        <div>
            <h1>{firstName}, {lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {hairColor}</p>
            <button onClick={addAge}>Add Age</button> <button onClick={reduceAge}>Reduce Age</button>
        </div>
    )
}

export default PersonCard