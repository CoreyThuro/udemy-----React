import React from 'react'

const person = (props) => {
    return (
    <div>
      <p>
        I'm {props.name}, dammit and I am {props.age} years old, dammit!
      </p>
      <p>{props.children}</p>
    </div>
    )
}

export default person; 