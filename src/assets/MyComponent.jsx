import React, { useState } from 'react'

function MyComponent() {
    const [name, setName] = useState('Guest')
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('Zabini')
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Name: {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={toggleEmployedStatus}>You work?</button>
        </div>
    )
}

export default MyComponent
