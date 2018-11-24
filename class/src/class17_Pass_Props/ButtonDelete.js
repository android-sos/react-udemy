import  React  from 'react'

export const ButtonDelete = (props) => {
    console.log(props);
    return <button classes={props.style} onClick={props.deletePerson}>Click</button>
        
}